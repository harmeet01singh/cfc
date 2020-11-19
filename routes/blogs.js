var express = require('express');
var blogRouter = express.Router();
var Blogs = require('../models/blogs');
const cors = require('./cors');

blogRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Blogs.find({})
        .then((blogs) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(blogs);
        }, (err) => next(err))
        .catch((err) => console.log(err));
    })
    .post(( req, res, next) => {
        Blogs.create(req.body)
        .then((blog) => {
            console.log('Blog Created: ', blog)
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(blog);
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .put(( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Put method not supported on /blogs');
    })
    .delete(( req, res, next) => {
        Blogs.remove({})
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

blogRouter.route('/:blogId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, ( req, res, next) => {
        Blogs.findOne(req.params.blogId)
        .then((blog) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(blog);
        })
    })
    .post(cors.corsWithOptions, ( req, res, next) => {
        res.statusCode = 401;
        res.setHeader('Content-Type', 'plain/text');
        res.end('Post method not supported on individual branch');
    })
    .put(cors.corsWithOptions, ( req, res, next) => {
        Blogs.findByIdAndUpdate( req.params.blogId, {
            $set: req.body
        }, { new: true})
        .then((blog) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({ message: 'Blog Updated', blog: blog});
        }, (err) => next(err))
        .catch((err) => next(err));
    })
    .delete(cors.corsWithOptions, ( req, res, next) => {
        Blogs.findByIdAndRemove(req.params.blogId)
        .then((resp) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err))
        .catch((err) => next(err));
    });

module.exports = blogRouter;
