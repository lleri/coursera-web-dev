(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);

CategoriesListController.$inject = ['items'];
function CategoriesListController(items) {
  var catlist = this;
  catlist.items = items.data;
}

})();
