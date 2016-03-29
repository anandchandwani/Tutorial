var User = require('../models/userModel');

module.exports = {

  index: function(req, res) {
    User.find({}, null, { sort: { created_at: -1 } }, function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  },

  destroy: function(req, res) {
    User.findById(req.params.id, function(err, user) {
      if (err) throw err;
      user.remove();
      res.status(204).send();
    });
  },

  update: function(req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {}, function(err, data) {
      if (err) throw err;
      res.send(data)
    });
  },

};