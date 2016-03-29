//jshint ignore: start

var executor = {
  env: 'execute',
  func: function named(func) {
    var variable = 'execution';
    func();
  }
};


(function() {

  var variable = 'definition';

  var definer = {
    env: 'define',
    func: function() {
      console.log(variable);
    }
  };

  definer.func();

  // executor.func(definer.func);

})();
