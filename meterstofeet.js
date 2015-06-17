(function() {

  'use strict';

  var MetersToFeet = function() {};

  MetersToFeet.prototype.get = function(x) {
    if(typeof x !== "number") {
      return 'invalid input';
    } else {
      return x * 3.28084;
    }
  };

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = MetersToFeet;
    } else {
      exports.MetersToFeet = MetersToFeet;
    }
  } else {
    window.MetersToFeet = MetersToFeet;
  }

})();
