var config = require('config');
var path = require('path')

module.exports = {

  verify: function(req, res, next) {
    if (req.path === '/login') {
      next();
    } else if (!req.cookies || req.cookies.token !== config.get('password')) {
      res.redirect('/login');
    } else {
      next();
    }
  },

  new: function(req, res) {
    res.sendFile(path.join(__dirname, '/../../public/login.html'));
  },

  create: function(req, res) {
    if (req.body.password !== config.get('password')) {
      res.redirect('/login');
    } else {
      res.cookie('token', req.body.password, { 
        maxAge: 7 * 24 * 3600000,
      });
      res.redirect('/');
    }
  },

  destroy: function(req, res) {
    res.cookie('token', '');
    res.redirect('/login');
  }

};