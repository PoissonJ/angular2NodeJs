var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next) {
  var email = ''
  User.findOne({}, function(err, doc) {
    if (err) {
      return res.send('Error');
    }
    if (doc) {
      email = doc.email // doc is the user
    }
    res.render('node', {email: email});
  });
});

router.post('/', function(req, res, next) {
  var title = req.body.email;
  var user = new User({
    firstName: "Jonathan",
    lastName: "Poisson",
    password: "test",
    email: "test@test.com"
  });
  user.save();
  res.redirect('/');
});

module.exports = router;
