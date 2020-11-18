var express = require('express');
var campRouter = express.Router();
var Campaigns = require('../models/campaigns');

campRouter.route('/:branchName')
    .get(( req, res, next) => {
        Campaigns.find({ branch: req.params.branchName})
        .then((campaigns) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campaigns);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Campaigns.create(req.body)
        .then((campaign) => {
            console.log('Campaign Created: ', Campaign)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campaign);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /branches');
    })
    .delete(( req, res, next) => {
        Campaigns.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

campRouter.route('/:branchName/:campaignId')
    .get(( req, res, next) => {
        Campaigns.findOne({ _id: req.params.campaignId})
        .then((campaign) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(campaign);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual branch');
    })
    .put(( req, res, next) => {
        Campaigns.findByIdAndUpdate( req.params.campaignId, {
            $set: req.body
        }, { new: true})
        .then((campaign) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Campaign Updated', campaign: campaign});
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(( req, res, next) => {
        Campaigns.findByIdAndRemove(req.params.campaignId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = campRouter;
