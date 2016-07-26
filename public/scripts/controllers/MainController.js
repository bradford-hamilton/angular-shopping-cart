angular
  .module('shoppingCart')

  .controller('MainController', ["$scope", "$stateParams", "ShoppingCart", function($scope, $stateParams, ShoppingCart) {
    $scope.view = {};
    $scope.teaData = dataArray;

    $scope.totalQuantity = function() {
      return ShoppingCart.getCheckoutQuantity();
    };

    $scope.addToBag = function(item) {
      ShoppingCart.addToBag(item);
    };

  }]);
