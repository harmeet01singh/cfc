var express = require('express');
var donRouter = express.Router();
var Donations = require('../models/donations');
const cors = require('./cors');

donRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Donations.find({})
        .then((donations) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(donations);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        console.log(req.body);
        Donations.create(req.body)
        .then((donation) => {
            donation.id = donation._id;
            donation.save()
            .then((donation) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(donation);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /blogs');
    })
    .delete(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.end('Not allowed to delete donations')
    });

donRouter.route('/:donationId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Donations.findById(req.params.blogId)
        .then((donation) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(donation);
        })
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual branch');
    })
    .put(cors.corsWithOptions, ( req, res, next) => { 
        res.statusCode = 401;
        res.setHeader('Content-Type', 'application/json');
        res.end('Not allowed to delete a donation')
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Donations.findByIdAndRemove(req.params.blogId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = donRouter;
