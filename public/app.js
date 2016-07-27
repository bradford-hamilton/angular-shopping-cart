angular
  .module('shoppingCart', ['ui.bootstrap', 'ui.router'])

  .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
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
      })
      .state('about', {
        url: '/about',
        controller: 'MainController',
        templateUrl: 'views/about.html'
      })
      .state('contact', {
        url: '/contact',
        controller: 'MainController',
        templateUrl: 'views/contact.html'
      });
    $locationProvider.html5Mode(true);
  }]);
