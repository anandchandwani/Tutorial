'use strict';

angular.module('tokenAuthApp')
  .service('auth', function ($http, $state, API_URL, authToken) {
    var authSuccess = function(res) {
      authToken.setToken(res.token);
      $state.go('main');
    };
    this.login = function(user) {
      return $http.post(API_URL + 'login', user).success(authSuccess);
    };
    this.register = function(user) {
      return $http.post(API_URL + 'register', user).success(authSuccess);
    }
  });
