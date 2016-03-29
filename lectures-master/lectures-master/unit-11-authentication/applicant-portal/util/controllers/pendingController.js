var Pending = require('../models/pendingModel');

module.exports = {

  index: function(req, res) {
    Pending.find({}, null, { sort: { updated_at: -1 } }).populate('_user').exec()
    .then(function(pendings) {
      res.send(pendings);
    });
  },

  destroy: function(req, res) {
    Pending.findById(req.params.id, function(err, pend) {
      if(err) throw err;
      pend.remove()  //redundant, yes. but it triggers the 'remove' hook
      res.status(204).send();
    });
  }
};