
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

  //gets the name of dish in menu
  this.getNames = function() {
      var output ='';

      if(this.menu == 0){
        output += "Pending";
      } 
      if(this.menu != 0){
        selected = this.menu;
        for(var i=0; i < selected.length; i++){
          one = selected[i];
          var dish = this.getDish(one);
          output += '<span class="remove" id="'+ one +'"><input type="submit" value="x" class="btn btn-default btn-xs"></span> '+dish.name +'<br/>';
        }
      }
      return output;
  }

  //gets the name of dish in menu
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
  





  this.dishSearch = $resource('http://api.bigoven.com/recipes',{pg:1,rpp:20,api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});
  this.getDish = $resource('http://api.bigoven.com/recipe/:id',{api_key:'dvxrV2fipnzly1OxypUK685yXpq8i4v1'});

  return this;

});