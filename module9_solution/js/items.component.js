(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'item.html',
  bindings: {
    items: '<'
  }
});

})();
