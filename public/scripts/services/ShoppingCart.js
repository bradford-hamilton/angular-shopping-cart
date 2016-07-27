angular
  .module('shoppingCart')

  .factory('ShoppingCart', function() {
    var ShoppingCart = {};
    var items = [];
    var itemsTotal = 0;

    ShoppingCart.getItems = function() {
      console.log(items);
      return items;
    };

    ShoppingCart.getItemsTotal = function() {
      items.forEach(function(item) {
        itemsTotal += (item.price * item.quantity);
      });
      console.log(itemsTotal);
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
          quantity: Number(item.quantity) || 1,
          price: item.price,
          imageUrl: item.imageUrl,
          caffeineScale: item.caffeineScale,
          ingredients: item.ingredients,
          rating: item.rating
        });
      }
    };

    ShoppingCart.removeFromBag = function(item) {
      console.log(items);
      for (var i = 0; i < items.length; i++) {
        if (items[i].name === item.name) {
          items.splice(i, 1);
          break;
        }
      }
      console.log(items);
    };

    return ShoppingCart;
  });
