var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function(req, res, next) {
  var message = new Message({
    content: req.body.content
  });
  message.save(function(err, result) {
    if (err) {
      return res.status(404).json({ // need to return to stop execution
        title: 'An error occurred',
        error: err // contains a message inside of the err object
      });
    }
    res.status(201).json({ // don't need to return beause there is no code after it
      message: 'Saved message',
      obj: result
    });
  });
});

module.exports = router;
