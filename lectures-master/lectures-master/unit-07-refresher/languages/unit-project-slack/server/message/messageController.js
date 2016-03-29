var Message = require('./messageModel');

module.exports = {
  index: function(req, res) {
    Message.find({}, function(err, foundMessages) {
      if (err) {
        return res.send(err);
      }
      res.send(foundMessages);
    });
  },
  create: function(req, res) {
    var message = new Message(req.body);
    if (message.save())
      res.send(message);
  }
};
