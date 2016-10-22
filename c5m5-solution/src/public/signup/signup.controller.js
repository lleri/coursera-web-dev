(function () {

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    SignUpService.storeInfo($ctrl.item);

    var promise = SignUpService.getItem();

    promise.then(function (response) {
      $ctrl.message = 0;
      $ctrl.completed = true;
    })
    .catch(function (error) {
      $ctrl.message = 1;
    });
  };
}

})();
