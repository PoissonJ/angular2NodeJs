var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

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

router.post('/signin', function(req, res, next) {
  User.findOne({email: req.body.email}, function(err, doc) {
    if (err) {
      return res.status(404).json({ // need to return to stop execution
        title: 'An error occurred',
        error: err // contains a message inside of the err object
      });
    }
    if (!doc) {
      return res.status(404).json({ // need to return to stop execution
        title: 'No User found',
        error: {message: 'User could not be found'}
      });
    }

    // Verify password
    if (!passwordHash.verify(req.body.password, doc.password)) {
      return res.status(404).json({ // need to return to stop execution
        title: 'Could not sign you in',
        error: {message: 'Invalid credentials'}
      });
    }

    // Correct password, create web token
    var token = jwt.sign({user: doc}, 'secret', {expiresIn: 7200}); // Expires in 2 hours
    res.status(200).json({
      message: 'Success',
      obj: token
    });
  });
});

module.exports = router;
