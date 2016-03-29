'use strict';

angular.module('tokenAuthApp')
  .factory('authToken', function ($window) {
    var storage = $window.localStorage;

    var authToken = {
      setToken: function(token) {
        storage.setItem('userToken', token);
      },
      getToken: function() {
        return storage.getItem('userToken');
      },
      isAuthenticated: function() {
        return !!authToken.getToken();
      },
      removeToken: function() {
        storage.removeItem('userToken');
      }
    };

    return authToken;
  });
