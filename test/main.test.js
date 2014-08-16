
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

  describe('.is_integer()', function () {

    it('should return true for a true number integer', function () {
      subject.is_integer(12).should.equal(true);
      subject.is_integer(120354).should.equal(true);
      subject.is_integer(2231).should.equal(true);
    });

    it('should return false for a string integer', function () {
      subject.is_integer('12').should.equal(false);
      subject.is_integer('120354').should.equal(false);
      subject.is_integer('2231').should.equal(false);
    });

    it('should return false for a number decimal', function () {
      subject.is_integer(1.12).should.equal(false);
      subject.is_integer(1.120354).should.equal(false);
      subject.is_integer(1.2231).should.equal(false);
    });

    it('should return false for a string decimal', function () {
      subject.is_integer('1.12').should.equal(false);
      subject.is_integer('1.120354').should.equal(false);
      subject.is_integer('1.2231').should.equal(false);
    });

  });

});
