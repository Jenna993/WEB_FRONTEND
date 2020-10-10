( function(){
	'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope){
		$scope.lunch="";
		$scope.inputMessage = "";
		$scope.LunchMessage="";
		$scope.colorChange="";
		$scope.borderChange="";
		$scope.checkAmount = function(){
			if($scope.lunch){
				$scope.borderChange ="greenBorder";
				$scope.colorChange = "green";
				//split the string
				const items = $scope.lunch.split(',');
				var count = 0;

				for(var i=0; i<items.length;i++){
					if(!items[i]){
						$scope.inputMessage = "Empty items are not considered valid input, so it is not added into the count";
					}
					else{
						count++;
					}
				}
				if(count===items.length){
					$scope.inputMessage ="";
				}
				if(count ===0){
					$scope.LunchMessage = "Please enter data first";
					$scope.borderChange ="redBorder";
					$scope.colorChange = "red";
				}
				else if(count<=3){
					$scope.LunchMessage = "Enjoy!";
				}else{
					$scope.LunchMessage = "Too much!";
				}
			}else{
				$scope.LunchMessage = "Please enter data first";
				$scope.borderChange ="redBorder";
				$scope.colorChange = "red";
			}
		};

	}

})();