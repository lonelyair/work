var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  var user = {
    username : 'admin',
    password : 'admin'
  }

  res.render('home', { title: 'home', user: user });
});

module.exports = router;
