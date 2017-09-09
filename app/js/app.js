(function() {
  'use strict';

  angular.module('app', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
        template: 'appHome'
      }).otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
    }]);

}());
