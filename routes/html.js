var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/html1', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Sushma' });
});

router.get('/html2', function(req, res, next) {
    res.render('index', { title: 'Express', name: 'Sushma' });
});

router.get('/html3', function(req, res, next) {
    res.render('index', { title: 'Express', name: 'Sushma' });
});

module.exports = router;