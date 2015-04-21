
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

	$scope.search = function(query) {

	   $scope.status = "Searching...";

	   Dinner.dishSearch.get({title_kw:query},function(data){
	     	$scope.dishes = data.Results;
	     	$scope.status = "Showing " + data.Results.length + " results";
	   	},function(data){
	     	$scope.status = "There was an error";
	   	});
 	}

});