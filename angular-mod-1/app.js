(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',['$scope',function($scope){
	$scope.data="";  //property is data
	$scope.msg="";
	$scope.msgstyle="";
	$scope.boxstyle="";
	$scope.check= function(){
		var items= $scope.data.split(',').filter(x=>x.trim()!="");

		console.log(items);
		if(items.length==0){
			$scope.msgstyle={'color':'red'};
			$scope.boxstyle={'border':'red'};
			$scope.msg= "please enter data first";
		}else if(items.length<=3) {
			$scope.msgstyle={'color':'green'};
			$scope.boxstyle={'border':'green'};
			$scope.msg= "enjoy";
		}else{
			$scope.msgstyle={'color':'green'};
			$scope.boxstyle={'border':'green'};
			$scope.msg= "too much!";
		}
	};	

}]);

})();