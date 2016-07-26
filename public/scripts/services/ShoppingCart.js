app.factory('ShoppingCart', function() {

  var ShoppingCart = {};
  var items = [];

  ShoppingCart.getItems = function() {
    return items;
  };

  ShoppingCart.getCheckoutQuantity = function() {
    return items.length;
  };

  ShoppingCart.addToBag = function(item) {
    var found = false;
    for (var i = 0; i < items.length; i++) {
      if (items[i].name === item.name) {
        items[i].quantity += Number(item.quantity) || 1;
        found = true;
        break;
      }
    }
    if ( !found ) {
      items.push({
        name: item.name,
        quantity: Number(item.quantity) || 1
      });
    }
  };



  return ShoppingCart;
});
