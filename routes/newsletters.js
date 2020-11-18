var express = require('express');
var letterRouter = express.Router();

letterRouter.route('/')
    .get(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Sending the newsletters');
    })
    .post(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Newsletter added');
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /newsletter');
    })
    .delete(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Deleting all the newsletters');
    });

letterRouter.route('/:newsletterId')
    .get(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Sending the newsletter: ' + req.params.newsletterId);
    })
    .post(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on /newsletter/' + req.params.newsletterId);
    })
    .put(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Updating the newsletter: ' + req.params.newsletterId);
    })
    .delete(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Deleting the newsletter: ' + req.params.newsletterId);
    });

module.exports = letterRouter;
