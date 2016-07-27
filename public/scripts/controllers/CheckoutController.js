angular
  .module('shoppingCart')

  .controller('CheckoutController', ["$scope", "$http", "$stateParams", "ShoppingCart", function($scope, $http, $stateParams, ShoppingCart) {
    $scope.view = {};

    $scope.edit = false;
    $scope.toggleEdit = function() {
      if (this.edit === false) {
        this.edit = true;
      } else {
        this.edit = false;
      }
    };

    $scope.checkoutItems = ShoppingCart.getItems();

    $scope.getItemsTotal = ShoppingCart.getItemsTotal();

    $scope.removeFromBag = function(item) {
      ShoppingCart.removeFromBag(item);
    };

  }]);
