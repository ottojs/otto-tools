
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

  describe('.is_empty_object()', function () {

    it('should return true for an empty object literal', function () {
      subject.is_empty_object({}).should.equal(true);
    });

    it('should return false for an object with one key', function () {
      subject.is_empty_object({ key : 'value' }).should.equal(false);
    });

    it('should return false for an object with multiple keys', function () {
      subject.is_empty_object({ key1 : 'one', key2 : 'two' }).should.equal(false);
    });

  });

  describe('.string_to_boolean()', function () {

    it('should convert truthy values to true', function () {
      subject.string_to_boolean('true').should.equal(true);
      subject.string_to_boolean(true).should.equal(true);
      subject.string_to_boolean('1').should.equal(true);
      subject.string_to_boolean(1).should.equal(true);
      subject.string_to_boolean('yes').should.equal(true);
    });

    it('should convert falsy values to false', function () {
      subject.string_to_boolean('false').should.equal(false);
      subject.string_to_boolean(false).should.equal(false);
      subject.string_to_boolean('0').should.equal(false);
      subject.string_to_boolean(0).should.equal(false);
      subject.string_to_boolean('no').should.equal(false);
      subject.string_to_boolean('null').should.equal(false);
      subject.string_to_boolean(null).should.equal(false);
      subject.string_to_boolean(undefined).should.equal(false);
    });

    it('should handle bad input', function () {
      subject.string_to_boolean('notabool').should.equal(false);
      subject.string_to_boolean(134832).should.equal(false);
    });

  });

  describe('.string_to_integer()', function () {

    it('should convert a string to a base 10 integer', function () {
      subject.string_to_integer('102').should.equal(102);
    });

  });

  describe('.get_timestamp()', function () {

    it('should provide a valid UNIX timestamp in seconds', function () {
      var timestamp = subject.get_timestamp();
      timestamp.should.be.type('number');
      timestamp.toString().should.have.length(10);
    });

  });

  describe('.get_timestamp_ms()', function () {

    it('should provide a valid UNIX timestamp in milliseconds', function () {
      var timestamp = subject.get_timestamp_ms();
      timestamp.should.be.type('number');
      timestamp.toString().should.have.length(13);
    });

  });

  describe('.uuid_random()', function () {

    it('should provide a UUID', function () {
      subject.uuid_random().should.be.type('string').with.length(32);
    });

  });

  describe('.uuid()', function () {

    it('should provide a UUID', function () {
      subject.uuid().should.be.type('string').with.length(32);
    });

  });

  describe('.url_decode()', function () {

    it('should remove spaces from a string and nothing more (yet)', function () {
      subject.url_decode('hello%20there').should.be.type('string').and.equal('hello there');
      subject.url_decode('super%20long%20sentence%20with%20spaces%20and%20stuff')
        .should.be.type('string').and.equal('super long sentence with spaces and stuff');
    });

  });

});
