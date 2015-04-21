// Search controller that we use whenever we have a search inputs
// and search results
dinnerPlannerApp.controller('SearchCtrl', function ($scope,Dinner) {

	$scope.search = function(query) {
	   $scope.status = "Searching...";
	 //  $scope.loading = true;
	   Dinner.searchDishes.get({title_kw:query},function(data){
	     	$scope.dishes = data.Results;
	     	//$scope.status = data.Results.length;
	     	// console.log(data);
	     	$scope.status = "Showing " + data.Results.length + " results";
	   	},function(data){
	     	$scope.status = "There was an error";
	   	});
 	}

});