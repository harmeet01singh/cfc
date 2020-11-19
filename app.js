var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
// var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const url = 'mongodb+srv://Harmeet:harmeet2001@cluster0.dduqg.mongodb.net/cfc';
const connect = mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

connect.then((db) => {
  console.log('Connected to server succesfully...')
}, (err) => console.log(err));

const branchRouter = require('./routes/branches');
const campRouter = require('./routes/campaigns');
const eventRouter = require('./routes/events');
const blogRouter = require('./routes/blogs');
const feedRouter = require('./routes/feedbacks');
const fileRouter = require('./routes/htffiles');
const conRouter = require('./routes/contribute');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(passport.initialize());
// app.use(passport.session());

app.use('/', indexRouter);
app.use('/files', fileRouter);
app.use('/branches', branchRouter);
app.use('/campaigns', campRouter);
app.use('/events', eventRouter);
app.use('/blogs', blogRouter);
app.use('/feedbacks', feedRouter);
app.use('/contribute', conRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
});

module.exports = app;
