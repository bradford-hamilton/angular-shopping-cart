(function() {
  'use strict';

  angular
    .module('shoppingCart')
    .factory('ShoppingCart', ShoppingCart);

      function ShoppingCart() {
        var ShoppingCart = {};
        var items = [];
        var found;
        ShoppingCart.change = 0;

        ShoppingCart.getItems = function() {
          return items;
        };

        ShoppingCart.getItemsTotal = function() {
          var itemsTotal = 0;
          items.forEach(function(item) {
            itemsTotal += (item.price * item.quantity);
          });
          return itemsTotal;
        };

        ShoppingCart.getCheckoutQuantity = function() {
          return items.length;
        };

        ShoppingCart.getCategories = function() {
          var categories = [];
          dataArray.forEach(function(item) {
            item.categories.forEach(function(category) {
              if ( !categories.includes(category) ) {
                categories.push(category);
              }
            });
          });
          return categories;
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

        ShoppingCart.editBag = function(item) {
          this.change += 1;
          for (var i = 0; i < items.length; i++) {
            if (items[i].name === item.name) {
              items[i].quantity = Number(item.quantity) || 1;
              found = true;
              break;
            }
          }
        };

        ShoppingCart.removeFromBag = function(item) {
          this.change += 1;
          for (var i = 0; i < items.length; i++) {
            if (items[i].name === item.name) {
              items.splice(i, 1);
              break;
            }
          }
        };
        return ShoppingCart;
      }
})();
