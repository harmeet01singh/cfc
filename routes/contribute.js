var express = require('express');
var conRouter = express.Router();
var Donations = require('../models/donations');
var Handins = require('../models/handins');
var Volunteers = require('../models/volunteers');
var Helps = require('../models/help');
const cors = require('./cors');

conRouter.route('/donations')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Donations.find({})
        .then((donations) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(donations);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Donations.create(req.body)
        .then((donation) => {
            donation.id = donation._id;
            donation.save()
            .then((donation) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(donation);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    });

conRouter.route('/handins')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Handins.find({})
        .then((donations) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(donations);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Handins.create(req.body)
        .then((handin) => {
            handin.id = handin._id;
            handin.save()
            .then((handin) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(handin);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })

conRouter.route('/helps')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Helps.find({})
        .then((help) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(help);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Helps.create(req.body)
        .then((help) => {
            help.id = help._id;
            help.save()
            .then((help) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(help);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })

conRouter.route('/volunteers')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Volunteers.find({})
        .then((donations) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(donations);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Volunteers.create(req.body)
        .then((volunteer) => {
            volunteer.id = volunteer._id;
            volunteer.save()
            .then((volunteer) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(volunteer);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    })

module.exports = conRouter;