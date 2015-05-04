
dinnerPlannerApp.controller('printCtrl', function ($scope, $routeParams, Dinner) {
  
//$scope.fullMenu = Dinner.dataMenu;
     $scope.menu = Dinner.getMenu();
     
    $scope.dishPrice = function(dish){

      var price = 0;

      for(ingredient in dish.Ingredients){
        price += dish.Ingredients[ingredient].Quantity * Dinner.getNumberOfGuests();
      }
        return price;
      }
    

    $scope.fullPrice = function(){

      $scope.totalPrice = 0;

      for(dish in $scope.fullMenu){
        $scope.totalPrice += $scope.dishPrice($scope.fullMenu[dish]);
      }
        return $scope.totalPrice;
    }
    
});