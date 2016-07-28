angular
  .module('shoppingCart')
  .filter('CurrencyFilter', CurrencyFilter);

  function CurrencyFilter() {
    return function(number) {
      if(isNaN(number) || number < 1) {
        return number;
      } else {
        return (number / 100).toFixed(2);
      }
    };
  }
