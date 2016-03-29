var { EventEmitter } = require('events');
var Dispatcher = require('./dispatcher');
var { REMOVE, UPDATE } = require('./constants');

class Store extends EventEmitter {
  constructor() {
    super();
    this._data = { apps: [], pendings: [], users: [], google: [] };
    Dispatcher.register(action => {
      switch(action.type) {
        case REMOVE:
          this.remove(action);
          break;
        case UPDATE:
          this.update(action);
          break;
      }
      this.emitChange();
    });
  }

  remove({ id, collection }) {
    this._data[collection].forEach((obj, i, data) => {
      if (obj._id === id) data.splice(i, 1);
    })
  }

  update({ id, collection, changes }) {
    var target = this._data[collection].find(obj => obj._id === id);
    for (let key in changes) {
      target[key] = changes[key];
    }
  }

  get state() {
    return this._data;
  }

  set state(newData) {
    this._data = { ...this._data, ...newData };
    this.emitChange();
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(func) {
    this.on('CHANGE', func);
  }

  removeChangeListener(func) {
    this.removeListener('CHANGE', func);
  }
}

module.exports = new Store;