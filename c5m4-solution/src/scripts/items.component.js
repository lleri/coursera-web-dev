(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/template/item.template.html',
  bindings: {
    items: '<'
  }
});

})();
