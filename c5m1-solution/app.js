(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.food = "";
  $scope.sayMessage = function () {
    return $scope.message;
  };

  $scope.checkFood = function () {
    var arr = $scope.food.trim().split(",");
    var count = 0;

    for(var i = 0; i < arr.length; i++) {
        if(arr[i].trim().length > 0) count++;
    }
    if(count == 0) $scope.message = "Please enter data first";
    else
      if(count < 4) $scope.message = "Enjoy!";
      else $scope.message = "Too much!";
  };
}

})();
