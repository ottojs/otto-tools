
'use strict';

// Modules
require('should');

// Subject
var subject = require('../lib/index.js');

describe('Module', function () {

  describe('.in_array()', function () {

    it('should return false when value is not in array', function () {
      var fn = subject.in_array(['abc', 16]);
      fn('def').should.equal(false);
      fn(8).should.equal(false);
    });

    it('should return true when value is in array', function () {
      var fn = subject.in_array(['abc', 16]);
      fn('abc').should.equal(true);
      fn(16).should.equal(true);
    });

  });

});
