(function () {
'use strict';

angular.module('public')
.controller('SignupController', SignupController);


SignupController.$inject = ['MenuService','InfoService'];
function SignupController(MenuService, InfoService) {
  	var userDetails = this;
  	userDetails.message = "";
  	userDetails.success = "";
  	userDetails.pattern = "^[0-9]+$";

	userDetails.submit = function(){
	  var promise= MenuService.getShortNames(userDetails.user.menuNumber);
	  promise.then(function(result){
		if(result === undefined || result.length ==0 || result.status ==500){
			userDetails.message = "No such menu number exists";
		}
		else{
			userDetails.message = "";
			var details = userDetails.user;
			details["title"]= result.name;
			details["description"]= result.description;
			details["image"]= result.title;
			InfoService.setUser(details);
			userDetails.success = "success";
		}
	  });
	};

 	userDetails.checkFavorite = function(){
 		var promise= MenuService.getShortNames(userDetails.user.menuNumber);
	  	promise.then(function(result){

 			if(result === undefined || result.length ==0 || result.status ==500){
				userDetails.message = "No such menu number exists";
			}
			else{
				userDetails.message="";
			}
		});
  };




}

})();