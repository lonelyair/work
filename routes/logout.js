var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  //res.render('login', { title: '用户登录' });
  res.redirect('/');
});

module.exports = router;
