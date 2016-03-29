'use strict';

angular.module('tokenAuthApp')
  .controller('RegisterCtrl', function ($scope, $http, alert, auth) {
    $scope.submit = function() {

      var user = {
        email: $scope.email,
        password: $scope.password,
      };

      auth.register(user).success(function(res) {
        alert('success', 'Registered', 'Welcome, ' + res.user.email + '!');
      })
      .error(function(err) {
        alert('warning', 'Error', err.message);
      });
    }
  });
