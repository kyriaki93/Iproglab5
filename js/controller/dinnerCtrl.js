// Dinner controller that we use whenever we have view that needs to 
// display or modify the dinner menu
dinnerPlannerApp.controller('DinnerCtrl', function ($scope, Dinner) {

  $scope.numberOfGuests = Dinner.getNumberOfGuests();

  $scope.menuNames = Dinner.getNames();
  $scope.menuPrice = Dinner.getPrice();
  $scope.fullPrice = Dinner.fullPrice();

  $scope.setNumberOfGuest = function(number){
    Dinner.setNumberOfGuests(number);
  }

  $scope.getNumberOfGuests = function() {
    return Dinner.getNumberOfGuests();
  }



});