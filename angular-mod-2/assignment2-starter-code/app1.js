(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var list1 = this;

  list1.items = ShoppingListCheckOffService.getbuyitem();

  list1.tobuyitem = function(itemIndex){
    ShoppingListCheckOffService.buyitem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list2 = this;

  list2.items = ShoppingListCheckOffService.getalreadyboughtitem();
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService() {
  var service = this;
  var tobuy=[
  {name:"cookies",quantity:10},
  {name:"cokes",quantity:5},
  {name:"beers",quantity:16},
  {name:"chips",quantity:3},
  {name:"apples",quantity:20}];

  var bought=[];

  service.buyitem=function(itemIndex){
    var item=tobuy[itemIndex];
    bought.push(item);
    tobuy.splice(itemIndex, 1);
  };

  service.getbuyitem=function(){
    return tobuy;
  };

  service.getalreadyboughtitem=function(){
    return bought;
  };

  
  
}




})();
