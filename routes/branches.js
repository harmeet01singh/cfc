var express = require('express');
var branchRouter = express.Router();
var Branches = require('../models/branches');
const cors = require('./cors');

branchRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Branches.find({})
        .then((branches) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(branches);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        Branches.create(req.body)
        .then((branch) => {
            console.log('Branch Created: ', branch)
            branch.id = branch._id;
            branch.save()
            .then((branch) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(branch);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /branches');
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Branches.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Range', 'branches 0-20/20')
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

branchRouter.route('/:branchId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors , ( req, res, next) => {
        Branches.findById(req.params.branchId)
        .then((branch) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(branch);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.setHeader('Content-Range', 'branches 0-20/20')
        res.end('Post method not supported on individual branch');
    })
    .put(cors.corsWithOptions, ( req, res, next) => {
        Branches.findByIdAndUpdate( req.params.branchId, {
            $set: req.body
        }, { new: true})
        .then((branch) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Range', 'branches 0-20/20')
            res.json(branch);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Branches.findByIdAndRemove(req.params.branchId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Content-Range', 'branches 0-20/20')
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = branchRouter;
