(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service("MenuSearchService", MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
};
NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var cont = this;
  cont.found = [];
  cont.searchTerm = "";
  cont.message = 0;

  cont.getItems = function () {

    cont.message = 0;
    if(cont.searchTerm.length)
    {
      var promise = MenuSearchService.getMatchedMenuItems(cont.searchTerm);

      promise.then(function (response) {
        cont.found = response;
        if(!cont.found.length) cont.message = 1;
      })
      .catch(function (error) {
        cont.found = [];
        console.log("Something went terribly wrong.");
      });
    }else {
      cont.message = 1;
    }
  }

  cont.removeItem = function (index)
  {
    cont.found.splice(index, 1);
  }
};

MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function (result) {
            var foundItems = [];
            var i = 0;
            for(i = 0; i < result.data.menu_items.length; i++) {
              // if( (result.result.data.menu_items[i].name.toLowerCase().includes(searchTerm.toLowerCase())) ||
                if(  (result.data.menu_items[i].description.toLowerCase().includes(searchTerm.toLowerCase())) ) {
                    foundItems.push(result.data.menu_items[i]);
                }
            }
            return foundItems;
        });
      };
  };

})();
