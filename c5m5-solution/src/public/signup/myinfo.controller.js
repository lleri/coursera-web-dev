(function () {

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['ApiPath', 'SignUpService'];
function MyInfoController(ApiPath, SignUpService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.item = SignUpService.getInfo();

  if($ctrl.item.shortCatName.length)
  {
    $ctrl.showData = 1;
    var promise = SignUpService.getItem();

    promise.then(function (response) {
      $ctrl.item.name = response.data.name;
      $ctrl.item.description = response.data.description;
      $ctrl.foundData = 1;
    })
    .catch(function (error) {
      $ctrl.foundData = 0;
    });
  }
}

})();
