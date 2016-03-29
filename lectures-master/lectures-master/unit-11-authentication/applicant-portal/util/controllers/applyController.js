var Application = require('../models/applyModel.js');

module.exports = {

  index: function(req, res) {
    Application.find({}).populate('_user').exec()
    .then(function(data) {
      res.send(data);
    });
  },

  destroy: function(req, res) {
    Application.findById(req.params.id, function(err, app) {
      if(err) throw err;
      app.remove()  //redundant, yes. but it triggers the 'remove' hook
      res.status(204).send();
    });
  },

  update: function(req, res) {
    Application.update({ _id: req.params.id }, req.body, {}, function(err, data) {
      if (err) throw err;
      res.send(data);
    });
  },

}