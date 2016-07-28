(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .controller('MainController', MainController);

    MainController.$inject = ["$scope", "$stateParams", "ShoppingCart"];

      function MainController($scope, $stateParams, ShoppingCart) {
        $scope.view = {};
        $scope.teaData = dataArray;
        $scope.categories = ShoppingCart.getCategories();

        $scope.totalQuantity = function() {
          return ShoppingCart.getCheckoutQuantity();
        };

        $scope.addToBag = function(item) {
          ShoppingCart.addToBag(item);
        };
      }
})();
