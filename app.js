//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");

var app = express();
app.listen(3010);
console.log("on 3010");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/pages')));

var router = require('./routes/routes');
app.use('/', router);
app.use('/page2', router);

/*
app.get('/', function(req,res){
  p = path.join(__dirname,'public/pages/index.html');
  res.sendFile(p);
});

app.get('/page2', function(req,res){
  p = path.join(__dirname, 'public/pages/page2.html');
  res.sendFile(p);
});
*/

app.get('/loadIndex', function(req, res){
  // Get content from file
  var contents = fs.readFileSync("test.json");
  // Define to JSON type
  var jsonContent = JSON.parse(contents);
  res.json(jsonContent);
});

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  next(createError(404));
//});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
