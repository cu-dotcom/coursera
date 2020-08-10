(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',['$scope',function($scope){
	$scope.data="";  //property is data
	$scope.check= function(){
		var items= $scope.data.split('');
		console.log(items);
		if(items.length==0){
			return "please enter data first";
		}else if(items.length<=3 && items.length!=0 ) {
			return "enjoy";
		}else{
			return "too much!";
		}
	};	

}]);

})();