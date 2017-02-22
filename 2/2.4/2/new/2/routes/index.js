var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {info:{ name: 'Harry', book:'Node.js' }});
});

module.exports = router;
