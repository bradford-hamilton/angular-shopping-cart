var app = angular.module('shoppingCart', ['ui.bootstrap', 'ui.router']);

app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state('home', {
      url: '/',
      controller: 'MainController',
      templateUrl: 'views/home.html'
    })
    .state('checkout', {
      url: '/checkout',
      controller: 'CheckoutController',
      templateUrl: 'views/checkout.html'
    });
    $locationProvider.html5Mode(true);
}]);
