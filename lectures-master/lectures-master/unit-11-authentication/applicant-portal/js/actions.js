var Dispatcher = require('./dispatcher');
var { REMOVE, UPDATE } = require('./constants');

var Actions = {
  remove: (collection, id) => {
    Dispatcher.dispatch({
      type: REMOVE,
      collection,
      id
    });
  },

  update: (id, collection, changes) => {
    Dispatcher.dispatch({
      type: UPDATE,
      id,
      collection,
      changes,
    });
  }
};

module.exports = Actions;