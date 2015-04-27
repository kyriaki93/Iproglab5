
dinnerPlannerApp.controller('DishCtrl', function ($scope, $routeParams, Dinner) {
  
$scope.dishId = $routeParams.dishId;
$scope.ready = false;

 $scope.dishInfo = function(){
 	
	   Dinner.getDish.get({id: $scope.dishId}, function(data){
	   		$scope.ready = true;
	     	$scope.dish = data;


	     	price = 0;
	     	var ingredients = $scope.dish.Ingredients;
    	 	
    	 	for (i=0; i<ingredients.length; i++){
      	  		var ingredient = ingredients[i];
      			price += ingredient.Quantity;
      			$scope.pending = (price); 
			}

	   	},function(data){

	     	$scope.status = "There was an error";

	   	});
	}

	$scope.dishInfo();
	
	 $scope.confirmDish = function(){

	 	Dinner.addDish($scope.dishId);

	 }
});