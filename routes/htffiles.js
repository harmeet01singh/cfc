var express = require('express');
var fileRouter = express.Router();
var Htfiles = require('../models/htffiles');

fileRouter.route('/:type')
    .get(( req, res, next) => {
        Htfiles.find({ type: req.params.type})
        .then((letters) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(letters);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Htfiles.create(req.body)
        .then((file) => {
            file.id = file._id;
            file.save()
            .then(file => {
                console.log('Newsletter Created: ', file)
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(file);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /newsletter');
    })
    .delete(( req, res, next) => {
        Htfiles.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

fileRouter.route('/file/:fileId')
    .get(( req, res, next) => {
        Htfiles.findById(req.params.fileId)
        .then((file) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(file);
        })
    })
    .post(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual letter');
    })
    .put(( req, res, next) => {
        Htfiles.findByIdAndUpdate( req.params.fileId, {
            $set: req.body
        }, { new: true})
        .then((file) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(file);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(( req, res, next) => {
        Htfiles.findByIdAndRemove(req.params.fileId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = fileRouter;
