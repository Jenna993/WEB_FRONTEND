(function () {
'use strict';

angular.module('public')
.service('InfoService', InfoService );


InfoService.$inject = []
  function InfoService() {
    var service = this;
    service.user = {};
    service.getUser = function(){
        return service.user;
        };

    service.setUser = function(userData){
        service.user=userData;
        };
   
    }

})();