
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

  this.dishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:20,api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});
  this.getDish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});

  var numberOfGuest = 2;
  var dataMenu = [];
  var menu = []

   if ($cookieStore.get("fullMenu") != null) {

      cookie = $cookieStore.get("fullMenu");

    for(dish in cookie){
        this.getDish.get({id:cookie[dish]}, function(data){

        menu.push(data);

      });
    }

    

}
  if ($cookieStore.get("numberOfGuest") == null) {
    var numberOfGuest = 2;
  } else {
    var numberOfGuest = $cookieStore.get("numberOfGuest");
  }

  this.setNumberOfGuests = function(num) {
    numberOfGuest = num;
    $cookieStore.put("numberOfGuest", num);
  }

  this.getNumberOfGuests = function() {
    return numberOfGuest;
  }

  this.getPrice = function(dish) {

      var price = 0;
        for(ingredient in dish.Ingredients){
          price += dish.Ingredients[ingredient].Quantity * this.getNumberOfGuests();
        }
          return price;
    

  }
  this.removeDishFromMenu = function(id) {

    var currentRecipes = $cookieStore.get("fullMenu");
    console.log(currentRecipes);
    for(recipeID in currentRecipes){
      if(currentRecipes[recipeID] == id){
        console.log(currentRecipes[recipeID]);
        currentRecipes.splice(recipeID, 1);
      }
    }
    $cookieStore.put("fullMenu", currentRecipes);

    for(dish in menu){
      if(menu[dish].RecipeID === id){
        menu.splice(dish, 1);
      }
    }

  }

  this.addDish = function(id){

    dataMenu.push(id);


    $cookieStore.put("fullMenu", dataMenu);
    console.log($cookieStore.get("fullMenu"));
  }

this.getMenu = function(){

  return menu;

}

  return this;

});