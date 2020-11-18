var express = require('express');
var finRouter = express.Router();

finRouter.route('/')
    .get(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Sending the financials');
    })
    .post(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Financial added');
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /financial');
    })
    .delete(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Deleting all the financials');
    });

finRouter.route('/:financialId')
    .get(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Sending the financial: ' + req.params.financialId);
    })
    .post(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on /financial/' + req.params.financialId);
    })
    .put(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Updating the financial: ' + req.params.financialId);
    })
    .delete(( req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Deleting the financial: ' + req.params.financialId);
    });

module.exports = finRouter;