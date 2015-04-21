
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
        templateUrl: 'partials/dish.html',
        controller: 'DishCtrl'
      }).
      // TODO in Lab 5: add more conditions for the last two screens (overview and preparation)
      otherwise({
        redirectTo: '/home'
      });
  }]);