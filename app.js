//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require("fs");
var request = require('request');
var fetchJson = require('node-fetch-json');

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
app.use('/santosh', router);

app.get('/suma', function(req,res){
  p = path.join(__dirname,'public/pages/suma.html');
  res.sendFile(p);
});


var schema = {"coord":{"lon":139,"lat":35},
"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
"wind":{"speed":7.31,"deg":187.002},
"rain":{"3h":0},
"clouds":{"all":92},
"dt":1369824698,
"id":1851632,
"name":"Shuzenji",
"cod":200};

app.get('/weather', function(req,res){
  p = path.join(__dirname,'public/pages/weather.html');
  res.sendFile(p);
})


app.post('/updateWeather', function(req,res){
  var location = req.body.location;
  var key = '5793fc98014d229079a27929038a79a1'
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + key;
  console.log(url);
  request(url, function (err, response, body) {
    if(err){
      console.log('error:', error);
    } else {
      body = JSON.parse(body);
      var temp_f = (body.main.temp*9/5) - 459.67;
      res.render("weather", {temp: temp_f, loc: location});
    }
  });
});

app.post('/updateWhatever', function(req, res){
  // Get content from file
  var contents = fs.readFileSync("test.json");
  var jsonContent = JSON.parse(contents);
  // Get info from req
  var yourObject = req.body;
  jsonContent.push(yourObject);
  // Update json & save
  fs.writeFile("test.json", JSON.stringify(jsonContent));
  // Redirect to home
  p = path.join(__dirname,'public/pages/suma.html');
  res.sendFile(p);
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


