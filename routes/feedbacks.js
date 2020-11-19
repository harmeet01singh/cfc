var express = require('express');
var feedRouter = express.Router();
var Feedbacks = require('../models/feedbacks');
const cors = require('./cors');

feedRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Feedbacks.find({})
        .then((feedback) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
            res.setHeader('Content-Range', 'branches 0-20/20');
            res.json(feedback);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Feedbacks.create(req.body)
        .then((feedback) => {
            feedback.id = feedback._id;
            feedback.save()
            .then((feedback) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.setHeader( 'Access-Control-Expose-Headers', 'Content-Range');
                res.setHeader('Content-Range', 'branches 0-20/20');
                res.json(feedback);
            })
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = feedRouter;