(function() {

  'use strict';

  var MetersToFeet = require('../meterstofeet.js');

  describe('meterstofeet.js', function() {

    it('is a thing', function() {
      expect(MetersToFeet).toBeDefined();
    });

    describe('.get()', function() {

      it('returns number of feet for number of meters given', function() {

        var ftm = new MetersToFeet();
        var input = 1;
        var output = 3.28084;

        expect(
          ftm.get(input)
        ).toEqual(
          output
        );

      });

    });

  });

})();
