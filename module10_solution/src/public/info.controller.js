(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);


MyInfoController.$inject = ['InfoService', 'user','ApiPath'];
function MyInfoController(InfoService, user, ApiPath) {
  	var userDetails = this;
  	userDetails.basePath = ApiPath;
  	userDetails.data = false;
 	userDetails.user = user;
 	if(userDetails.user.title){
 		userDetails.data = true;
 	}
}

})();