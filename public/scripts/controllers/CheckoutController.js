(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .controller('CheckoutController', CheckoutController);

      CheckoutController.$inject = ["$scope", "$http", "$stateParams", "ShoppingCart"];

      function CheckoutController ($scope, $http, $stateParams, ShoppingCart) {
        $scope.view = {};
        $scope.checkoutItems = ShoppingCart.getItems();
        $scope.edit = false;

        $scope.$watch(function() {
          return ShoppingCart.change;
        }, function() {
          $scope.getItemsTotal = ShoppingCart.getItemsTotal();
        });

        $scope.toggleEdit = function() {
          if (this.edit === false) {
            this.edit = true;
          } else {
            this.edit = false;
          }
        };

        $scope.editBag = function(item) {
          ShoppingCart.editBag(item);
        };

        $scope.removeFromBag = function(item) {
          ShoppingCart.removeFromBag(item);
        };
      }
})();
