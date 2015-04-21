
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {
  
  var numberOfGuest = 2;
  this.menu = [];

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

  this.getNames = function() {
      var output ='';

      if(this.menu == 0){
        output += "Pending";
      } 
      if(this.menu != 0){
        selected = this.menu;
        for(var i=0; i < selected.length; i++){
          one = selected[i];
          var dish = getDish(one);
          output += '<span class="remove" id="'+ one +'"><input type="submit" value="x" class="btn btn-default btn-xs"></span> '+dish.name +'<br/>';
        }
      }
      return output;
  }

  this.fullPrice = function() {
      
      var output =0.00;

      if(this.menu == 0){
        output += "0.00";
      } 
      if(this.menu != 0){
        selected = this.menu;
        for(var i=0; i < selected.length; i++){
        one = selected[i];
        output += this.getDishPrice(one);
        
        }
      }

      return output;
        
  }

  this.getPrice = function() {
    
    
      var output ='';

      if(this.menu == 0){
        output += "0.00";
      } 
      if(this.menu != 0){
        selected = this.menu;
        for(var i=0; i < selected.length; i++){
        one = selected[i];
        output += this.getDishPrice(one) + "<br>";
        
        }
      }

      return output;
  }
  


  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details




  this.dishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:20,api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});
  this.dish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});

  return this;

});