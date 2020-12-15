(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://pure-cove-56216.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
