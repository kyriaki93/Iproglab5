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

  $scope.removeDish = function(id){
    Dinner.removeDishFromMenu(id);
  }

  this.removeDishFromMenu = function(id) {
    var currentRecipes = $cookieStore.get("fullMenu");
    for(recipeID in currentRecipes){
      if(currentRecipes[recipeID] === id){
        currentRecipes.splice(recipeID, 1);
      }
    }
    $cookieStore.put("fullMenu", currentRecipes);

    for(dish in this.dataMenu){
      if(this.dataMenu[dish].RecipeID === id){
        this.dataMenu.splice(dish, 1);
      }
    }
  }

    

});