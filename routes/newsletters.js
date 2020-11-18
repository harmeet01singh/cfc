var express = require('express');
var fileRouter = express.Router();
var Files = require('../models/files');

fileRouter.route('/')
    .get(( req, res, next) => {
        Files.find({})
        .then((letters) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(letters);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Files.create(req.body)
        .then((letter) => {
            console.log('Newsletter Created: ', letter)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(letter);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /newsletter');
    })
    .delete(( req, res, next) => {
        Files.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

fileRouter.route('/:letterId')
    .get(( req, res, next) => {
        Files.findOne(req.params.blogId)
        .then((letter) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(letter);
        })
    })
    .post(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual letter');
    })
    .put(( req, res, next) => {
        Files.findByIdAndUpdate( req.params.blogId, {
            $set: req.body
        }, { new: true})
        .then((letter) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Newsletter Updated', letter: letter});
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(( req, res, next) => {
        Files.findByIdAndRemove(req.params.blogId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = fileRouter;
