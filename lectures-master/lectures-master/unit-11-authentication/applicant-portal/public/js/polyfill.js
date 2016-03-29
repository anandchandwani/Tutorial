if (typeof Function.prototype.bind != 'function') {
  Function.prototype.bind = function bind(obj) {
    var args = Array.prototype.slice.call(arguments, 1),
    self = this,
    nop = function() {
    },
    bound = function() {
      return self.apply(
        this instanceof nop ? this : (obj || {}), args.concat(
          Array.prototype.slice.call(arguments)
          )
        );
    };
    nop.prototype = this.prototype || {};
    bound.prototype = new nop();
    return bound;
  };
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    enumerable: false,
    value: function(predicate) {
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });

}