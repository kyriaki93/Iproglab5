// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope, Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

     $scope.fullMenu = Dinner.dataMenu;
  
  $scope.dishPrice = function(dish){    

      return Dinner.getPrice(dish);
    
  }
    

  $scope.fullPrice = function(){

      $scope.totalPrice = 0;

      for(dish in $scope.fullMenu){
        $scope.totalPrice += $scope.dishPrice($scope.fullMenu[dish]);
      }
        return $scope.totalPrice;
  }

  $scope.removeDish = function(id){
    Dinner.removeDishFromMenu(id);
  }



    

});