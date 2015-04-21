//user controller

	app.controller('exampleCtrl', function ($scope, Dinner){

	$scope.numberOfGuests = Dinner.getNumberOfGuests();

  	$scope.setNumberOfGuest = function(number){
    	Dinner.setNumberOfGuests(number);
  	}

  	$scope.getNumberOfGuests = function() {
    	return Dinner.getNumberOfGuests();
  	}

  	// TODO in Lab 5: Implement the methods to get the dinner menu
  	// add dish to menu and get total menu price
		
		
		
	})


