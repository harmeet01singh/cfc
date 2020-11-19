var express = require('express');
var fileRouter = express.Router();
var Htfiles = require('../models/htffiles');
const cors = require('./cors');

fileRouter.route('/:type')
.options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
})
    .get(cors.cors, ( req, res, next) => {
        Htfiles.find({ type: req.params.type})
        .then((files) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(files);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        Htfiles.create(req.body)
        .then((file) => {
            file.id = file._id;
            file.save()
            .then(file => {
                console.log('Newsletter Created: ', file)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(file);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /newsletter');
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Htfiles.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

fileRouter.route('/file/:fileId')
.options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
})
    .get(cors.cors, ( req, res, next) => {
        Htfiles.findById(req.params.fileId)
        .then((file) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(file);
        })
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual letter');
    })
    .put(cors.corsWithOptions, ( req, res, next) => {
        Htfiles.findByIdAndUpdate( req.params.fileId, {
            $set: req.body
        }, { new: true})
        .then((file) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(file);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Htfiles.findByIdAndRemove(req.params.fileId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = fileRouter;
