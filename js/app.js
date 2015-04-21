
var app = angular.module('app',
 [ 'ngRoute']);

app.config(['$routeProvider',
	function($routeProvider){
		$routeProvider.when('/', {
				templateUrl: 'js/view/home.html',
			}).when('/create', {
				templateUrl: 'js/view/select.html',
				
			});

		}
		]);


		


		
		
		