var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Sushma' });
});

router.get('/santosh', function(req, res, next) {
  res.render('santosh', { title: 'Express', name: 'Santosh' });
});

module.exports = router;
