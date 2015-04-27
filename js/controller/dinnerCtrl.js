// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope, Dinner) {

  $scope.numberOfGuest = Dinner.getNumberOfGuests();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }

     $scope.fullMenu = Dinner.dataMenu;
     $scope.menu = Dinner.getMenu();
  
  $scope.dishPrice = function(dish){    

      return Dinner.getPrice(dish);
    
  }
    

  $scope.fullPrice = function(){

      $scope.totalPrice = 0;

      for(dish in $scope.menu){
        $scope.totalPrice += $scope.dishPrice($scope.menu[dish]);
      }
        return $scope.totalPrice;
  }

  $scope.removeDish = function(id){
    Dinner.removeDishFromMenu(id);
  }



    

});