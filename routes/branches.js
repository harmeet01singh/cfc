var express = require('express');
var branchRouter = express.Router();
var Branches = require('../models/branches');

branchRouter.route('/')
    .get(( req, res, next) => {
        Branches.find({})
        .then((branches) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(branches);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Branches.create(req.body)
        .then((branch) => {
            console.log('Branch Created: ', branch)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(branch);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /branches');
    })
    .delete(( req, res, next) => {
        Branches.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

branchRouter.route('/:branchId')
    .get(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Get method not supported on individual branch');
    })
    .post(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual branch');
    })
    .put(( req, res, next) => {
        Branches.findByIdAndUpdate( req.params.branchId, {
            $set: req.body
        }, { new: true})
        .then((branch) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Branch Updated', branch: branch});
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(( req, res, next) => {
        Branches.findByIdAndRemove(req.params.branchId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = branchRouter;
