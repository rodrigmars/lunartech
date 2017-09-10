(function() {

  'use strict';

  angular.module('app').config(Routes);

  Routes.$inject = ['$routeProvider', '$locationProvider'];

  function Routes($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      template: 'appHome'
    }).otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode(true);
  };

}());
