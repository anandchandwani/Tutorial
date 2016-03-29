'use strict';

angular.module('tokenAuthApp')
  .controller('LogoutCtrl', function ($state, authToken, alert) {
    authToken.removeToken();
    alert('success', 'Logged out.');
    $state.go('main');
  });
