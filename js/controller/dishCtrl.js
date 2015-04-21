// Dinner controller that we use whenever we want to display detailed
// information for one dish
dinnerPlannerApp.controller('DishCtrl', function ($scope, $routeParams, Dinner) {
  
$scope.dishId = $routeParams.dishId;
$scope.ready = false;

 $scope.dishInfo = function(){
 	
	   Dinner.getDish.get({id: $scope.dishId}, function(data){
	   		$scope.ready = true;
	     	$scope.dish = data;

	   	},function(data){

	     	$scope.status = "There was an error";
	   	});
	}

	$scope.dishInfo();
 	
});