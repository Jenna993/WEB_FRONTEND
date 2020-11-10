(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'home.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'categories.html',
    controller: 'CategoriesController as cat',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
   })

  .state('menuItems', {
    url: '/menu-item/{itemId}',
    templateUrl: 'items.html',
    controller: 'ItemsController as itemDetail',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemForCategory($stateParams.itemId);
      }]
    }
  });

}

})();