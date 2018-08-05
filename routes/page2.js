var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/page2', function(req, res, next) {
  res.render('page2', { title: 'Express', name: 'Santosh' });
});

module.exports = router;
