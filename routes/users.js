var express = require('express');
var router = express.Router();
var passwordHash = require('pashword-hash');

var Message = require('../models/user');

router.post('/', function(req, res, next) {
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: passwordHash.generate(req.body.password),
    email: req.body.email
  });
  user.save(function(err, result) {
    if (err) {
      return res.status(404).json({ // need to return to stop execution
        title: 'An error occurred',
        error: err // contains a message inside of the err object
      });
    }
    res.status(201).json({ // don't need to return beause there is no code after it
      message: 'User created',
      obj: result
    });
  })
});

module.exports = router;
