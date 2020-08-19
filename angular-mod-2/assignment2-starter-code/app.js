(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.factory('ShoppingListFactory', ShoppingListFactory);
//.config(Config);
/*
Config.$inject = ['ShoppingListServiceProvider'];
function Config(ShoppingListServiceProvider) {
  // Save Yaakov from himself
  ShoppingListServiceProvider.defaults.maxItems = 2;
}
*/

//items to be bought 
ToBuyController.$inject = ['ShoppingListFactory'];
function ToBuyController(ShoppingListFactory) {
  var list1 = this; 
  var shoppingList = ShoppingListFactory();
  list1.itemName1 = "";
  
  list1.deletenaddItem = function (itemIndex) {
      ShoppingListService.deletenaddItem(itemIndex);      
  };
}

//items which are already bought
AlreadyBoughtController.$inject=['ShoppingListFactory'];
function AlreadyBoughtController(ShoppingListFactory){
  var list2=this;
  var shoppingList = ShoppingListFactory();
  list2.itemName2 = "";
  
  //list2.itemName = "";
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var itemlist1 = [],itemlist2 = [];
  
  service.deletenaddItem = function (itemIndex) {
    if(itemlist1.length<maxItems){
      var itemName1,itemName2; 
      itemlist1.push(itemName1);
      //itemlist2.push(itemName2);     
    }else{
      throw new Error("everything is bought");
    }
    
    itemlist1.splice(itemIndex, 1);      
    
  };
}
  /*
  service.getItemslist1 = function () {
    return itemlist1;
  };
  
  service.getItemslist2 = function () {
    return itemlist2;
  };
}
*/

function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}

})();
