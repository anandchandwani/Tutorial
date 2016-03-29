'use strict';

angular.module('tokenAuthApp')
  .controller('LoginCtrl', function ($scope, $http, alert, auth) {
    $scope.submit = function() {

      var user = {
        email: $scope.email,
        password: $scope.password,
      };

      auth.login(user).success(function(res) {
        alert('success', 'Logged in', 'Welcome back, ' + res.user.email + '!');
      })
      .error(function(err) {
        alert('warning', 'Error', err.message);
      });
    }
  });
