var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Sushma' });
});

router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Express', name: 'Santosh' });
});

module.exports = router;
