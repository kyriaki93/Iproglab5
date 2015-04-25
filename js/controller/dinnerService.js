
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

  var numberOfGuest = 2;
  this.dataMenu = [];

  if ($cookieStore.get("fullMenu") != null) {
    var fullMenu = $cookieStore.get("fullMenu");
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

  this.getPrice = function(dish) {

      var price = 0;
        for(ingredient in dish.Ingredients){
          price += dish.Ingredients[ingredient].Quantity * this.getNumberOfGuests();
        }
          return price;
    

  }
  this.removeDishFromMenu = function(id) {

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