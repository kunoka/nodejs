var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('index.jade', {name:"danhuang", book:"Node.js", title:"a"});
});

module.exports = router;