(function () {
'use strict';

angular.module('public')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;

  // List of shopping items
  var item = {
        firstname: "",
        lastname: "",
        email: "",
        shortCatName: "",
        phone: ""
      };

  service.storeInfo = function (item_) {
    item.firstname = item_.firstname;
    item.lastname = item_.lastname,
    item.email = item_.email;
    item.shortCatName = item_.shortCatName;
    item.phone = item_.phone;
  };

  service.getInfo = function () {
    return item;
  };

  service.getItem = function () {
    // if(item.shortCatName.length)
      return $http.get(ApiPath + '/menu_items/' + item.shortCatName + '.json');
    // .then(function (response) {
    //   return response.data;
    // });
  };
}

})();
