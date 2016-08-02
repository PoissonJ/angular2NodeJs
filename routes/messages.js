var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res, next) {
  Message.find()
    // Add user object
    .populate('user', 'firstName') // Only retrieve the users first name
    .exec(function(err, docs) {// Dont execure the find query immediatlet, instead exec all queries
      if (err) {
        return res.status(404).json({
          title: 'An error occurred',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: docs
      });
    });
});

// Middleware on request running top to buttom
router.use('/', function(req, res, next) {
  jwt.verify(req.query.token, 'secret', function(err, decoded) {
    if (err) {
      return res.status(404).json({
        title: 'Authentication failed',
        error: err
      });
    }
    next(); // Continue to next routes with the knowledge the user is signed in
  });
})

router.post('/', function(req, res, next) {
  // Find user from payload
  var decoded = jwt.decode(req.query.token);
  User.findById(decoded.user._id, function(err, doc) {
    if (err) {
      return res.status(401).json({ // need to return to stop execution
        title: 'An error occurred',
        error: err // contains a message inside of the err object
      });
    }

    var message = new Message({
      content: req.body.content,
      user: doc // User object from the database
    });
    message.save(function(err, result) {
      if (err) {
        return res.status(404).json({ // need to return to stop execution
          title: 'An error occurred',
          error: err // contains a message inside of the err object
        });
      }

      // Add message to user's message array
      doc.messages.push(result)
      doc.save(); // Update user

      res.status(201).json({ // don't need to return beause there is no code after it
        message: 'Saved message',
        obj: result
      });
    });
  });
});

router.patch('/:id', function(req, res, next) {
  // Find user from payload
  var decoded = jwt.decode(req.query.token);

  Message.findById(req.params.id, function(err, doc) {
    if (err) {
      return res.status(404).json({ // need to return to stop execution
        title: 'An error occurred',
        error: err // contains a message inside of the err object
      });
    }
    if (!doc) { // No message found from given id
      return res.status(404).json({ // need to return to stop execution
        title: 'No Message found',
        error: {message: 'Message could not be found'}
      });
    }

    // success finding mesage
    if (doc.user != decoded.user._id) { // doc.user is just the id
      return res.status(401).json({ // need to return to stop execution
        title: 'User not authorized',
        error: {message: 'Message created by other user'}
      });
    }
    doc.content = req.body.content;
    doc.save( function (err, result) {
      if (err) { // Mongoose is smart enough to know to update the already existing object
        return res.status(404).json({ // need to return to stop execution
          title: 'An error occurred',
          error: err // contains a message inside of the err object
        });
      }
      res.status(200).json({
        message: 'Success',
        obj: result
      })
    });
  });
})

router.delete('/:id', function(req, res,next){
  // Find user from payload
  var decoded = jwt.decode(req.query.token);

  Message.findById(req.params.id, function(err, doc) {
    if (err) {
      return res.status(404).json({ // need to return to stop execution
        title: 'An error occurred',
        error: err // contains a message inside of the err object
      });
    }
    if (!doc) { // No message found from given id
      return res.status(404).json({ // need to return to stop execution
        title: 'No Message found',
        error: {message: 'Message could not be found'}
      });
    }

    // success finding mesage
    if (doc.user != decoded.user._id) { // doc.user is just the id
      return res.status(401).json({ // need to return to stop execution
        title: 'User not authorized',
        error: {message: 'Message created by other user'}
      });
    }

    doc.content = req.body.content;
    doc.remove( function (err, result) {
      if (err) { // Mongoose is smart enough to know to update the already existing object
        return res.status(404).json({ // need to return to stop execution
          title: 'An error occurred',
          error: err // contains a message inside of the err object
        });
      }
      res.status(200).json({
        message: 'Successfully deleted',
        obj: result
      })
    });
  });
})

module.exports = router;
