
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {
  
  var numberOfGuest = 2;
  this.dataMenu = [];

  if ($cookieStore.get("fullMenu") != null) {
    var fullMenu = $cookieStore.get("fullMenu");
  }
  else{
     var fullMenu = 'Pending';
  }

  if ($cookieStore.get("numberOfGuests") == null) {
    var numberOfGuests = 2;
  } else {
    var numberOfGuests = $cookieStore.get("numberOfGuests");
  }

  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
    $cookieStore.put("numberOfGuests", num);
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }

  this.removeDishFromMenu = function(id) {

    // var currentRecipes = $cookieStore.get("fullMenu");
    // for(recipeID in currentRecipes){
    //   if(currentRecipes[recipeID] === id){
    //     currentRecipes.splice(recipeID, 1);
    //   }
    // }
    // $cookieStore.put("fullMenu", currentRecipes);

    menu = this.dataMenu;
    for(dish in menu){
      if(menu[dish].RecipeID == id){
        menu.splice(dish, 1);
      }
    }

  }

  this.dishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:20,api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});
  this.getDish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});

  return this;

});