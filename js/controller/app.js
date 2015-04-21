
var dinnerPlannerApp = angular.module('dinnerPlanner', ['ngRoute', 'ngResource', 'ngCookies']);


dinnerPlannerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'js/view/home.html'
      }).
      when('/create', {
        templateUrl: 'js/view/select.html',
        controller: 'SearchCtrl'
      }).
      when('/confirm', {
        templateUrl: 'js/view/overview.html',
      }).
      when('/print', {
        templateUrl: 'js/view/print.html',
      }).
     when('/dish/:dishId', {
        templateUrl: 'js/view/dish.html',
        controller: 'DishCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);