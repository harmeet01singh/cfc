var express = require('express');
var eventRouter = express.Router();
var Events = require('../models/events');
const cors = require('./cors');

eventRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Events.find({})
        .then((event) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(event);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        Events.create(req.body)
        .then((event) => {
            console.log('Event Created: ', event)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(event);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /event');
    })
    .delete(( req, res, next) => {
        Events.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

eventRouter.route('/:eventId')
    .get(cors.cors, ( req, res, next) => {
        Events.findOne(req.params.eventId)
        .then((eve) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(eve);
        })
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual event');
    })
    .put(cors.corsWithOptions, ( req, res, next) => {
        Events.findByIdAndUpdate( req.params.eventId, {
            $set: req.body
        }, { new: true})
        .then((event) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Branch Updated', event: event});
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Events.findByIdAndRemove(req.params.eventId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = eventRouter;
