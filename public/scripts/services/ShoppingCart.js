app.factory('ShoppingCart', function() {

  var ShoppingCart = {};

  $scope.addToBag = function(item) {
    console.log(item);
  };
  return ShoppingCart;

});
