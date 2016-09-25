(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
.service("ShoppingListCheckOffService", ShoppingListCheckOffService);


ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var buy = this;

  buy.items = ShoppingListCheckOffService.getBuyItems();

  buy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  }
}

AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var bought = this;

  // ShoppingListCheckOffService.setEntity(this);
  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Sugar drinks",
      quantity: "10"
    },
    {
      name: "Cakes",
      quantity: "5"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];

  var boughtItems = [];

  // service.buyItem = function (itemName, quantity) {
  //   var item = {
  //     name: itemName,
  //     quantity: quantity
  //   };
  //   items.push(item);
  // };

  service.buyItem = function (itemIndex) {
    boughtItems.push(buyItems[itemIndex]);
    buyItems.splice(itemIndex, 1);
    // console.log(boughtItems);
  };

  service.getBuyItems = function () {
    return buyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
