angular.module('coolName', []);

function MessageController($http) {

  var url = 'http://slack-server.elasticbeanstalk.com/messages';

  $http.get(url).then(function(res) {
    this.data = res.slice(-10);
  });
}

MessageController.$inject = ['$http'];

angular.module('coolName')
.controller('MessageController', MessageController);


