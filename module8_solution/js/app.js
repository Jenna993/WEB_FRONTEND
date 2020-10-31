( function(){
	'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems', foundItems);

	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
		var narrow = this;
		narrow.term = "";
		narrow.message = "";
		narrow.getMatch = function(){
			narrow.found ="";
			narrow.message = "";
			var promise = MenuSearchService.getMatchedMenuItems(narrow.term);
			promise.then(function(result){
			if(result === undefined || result.length ==0){
				narrow.message = "Nothing Found";
			}
			else{
				narrow.found = result;
			}
		});
	}
	
		narrow.removeItem = function (itemIndex) {
			var foundItemsArray = narrow.found;
			foundItemsArray.splice(itemIndex, 1);
			narrow.found = foundItemsArray;
 		 };
	}

	MenuSearchService.$inject = ['$http'];
	function MenuSearchService($http){
		var service = this;
	
		service.getMatchedMenuItems= function (searchTerm){
			return $http({
     	 		method: "GET",
      			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")

    		}).then(function (result) {
    			// process result and only keep items that match
    			var foundItems=[];
    			for(var i in result.data.menu_items){
    				var item = result.data.menu_items[i];

    				if(searchTerm!="" && item.description.toLowerCase().indexOf(searchTerm.toLowerCase())!= -1){
    					foundItems.push(item);
    				}
    			}

   				// return processed items
    			return foundItems;
			});

		};
	}	
	function foundItems() {
		 var ddo = {
		    templateUrl: 'foundItems.html',
		    scope: {
		      found: '<',
		      onRemove: '&'
		    },
		    controller: NarrowItDownController,
		    controllerAs: 'narrowed',
		    bindToController: true,
		  };

		  return ddo;
		}



})();