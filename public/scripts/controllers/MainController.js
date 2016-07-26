app.controller('MainController', ["$scope", "$http", "$stateParams", "ShoppingCart", function($scope, $http, $stateParams, ShoppingCart) {
  $scope.view = {};
  $scope.teaData = dataArray;

  $scope.view.totalQuantity = function() {
    return ShoppingCart.getCheckoutQuantity();
  };

  $scope.addToBag = function(item) {
    ShoppingCart.addToBag(item);
  };

}]);
