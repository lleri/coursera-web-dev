(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemController', ItemController);

// Version with resolving to 1 item based on $stateParams in route config
ItemController.$inject = ['$stateParams', 'items'];
function ItemController($stateParams, items) {
  var itCont = this;
  itCont.menu = items.data.menu_items;
  itCont.name = items.data.category.name;
  };


})();
