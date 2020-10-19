( function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController )
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService)
	.filter('Cost',CostFilter);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var shop = this;
		shop.toBuyItems = ShoppingListCheckOffService.getItems();

		shop.buyItem = function(itemIndex){
			ShoppingListCheckOffService.buyItem(itemIndex);
		};

	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService', 'CostFilter'];
	function AlreadyBoughtController(ShoppingListCheckOffService, CostFilter){
		var bought = this;

		bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	}

	function ShoppingListCheckOffService(){
		var service = this;

		var boughtItems =[];
		var toBuyItems = [{ name: "cookies", quantity: 10, pricePerItem: 2}, {name:"Pizza", quantity: 2, pricePerItem: 5}, {name:"Ice Cream", quantity: 4, pricePerItem: 3},{name:"Pie", quantity: 2, pricePerItem: 4},{name:"Chips", quantity: 1, pricePerItem: 2},{name:"Lunch Meat", quantity: 1, pricePerItem: 11},{name:"Soda", quantity: 7, pricePerItem: 2}];
	
		service.buyItem = function (itemIndex) {
	   		boughtItems.push(toBuyItems[itemIndex]);
	   	    toBuyItems.splice(itemIndex, 1);

	 	};
	 	service.getItems = function () {
	    	return toBuyItems;
	  	};
	  	service.getBoughtItems = function(){
	  		return boughtItems;
	  	};
	  	service.removeItem = function (itemIndex) {
    		items.splice(itemIndex, 1);
  		};

	}

	function CostFilter() {
  		return function (input) {
  			return "$$$" + input;
  	};
}

})();