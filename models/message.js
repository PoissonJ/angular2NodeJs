var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
  content: {type: String, required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

// Middleware after remove command is called
// Removes the message from the user after the message is deleted
schema.post('remove', function(doc) { // doc is the object that is removed
  var deletedMessage = doc;
  User.findById(doc.user, function(err, doc) {
    doc.messages.pull(deletedMessage);
    doc.save();
  })
})

module.exports = mongoose.model('Message', schema);
