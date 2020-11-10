(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$http']
function MenuDataService($http) {
  var service = this;
  service.getAllCategories = function(){
      var response = $http({
            method: "GET",
            url: ("https://davids-restaurant.herokuapp.com/categories.json")
          });
      console.log(response);
      return response;
  };
  service.getItemForCategory = function(categoryShortName){
    var mainUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=";
      var response = $http({
            method: "GET",
            url: (mainUrl + categoryShortName)
          });
      return response;

  };

 
  }

})();