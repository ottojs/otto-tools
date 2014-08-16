
'use strict';

// Modules
var crypto    = require('crypto');
var node_uuid = require('node-uuid');
var _         = require('lodash');

function in_array (array) {
  return function (value) {
    return _.indexOf(array, value) !== -1;
  };
}

function is_integer (num) {
  return typeof num === 'number' && num % 1 === 0;
}

function is_empty_object (object) {
  if (Object.keys(object).length === 0) {
    return true;
  } else {
    return false;
  }
}

// http://stackoverflow.com/questions/263965/how-can-i-convert-a-string-to-boolean-in-javascript
function string_to_boolean (string) {

  // It's a boolean already, no need to parse
  if (typeof string === 'boolean') { return string; }

  // Check for bad values
  if (string === undefined) { return false; }
  if (string === null)      { return false; }

  if (typeof string === 'string') { string = string.toLowerCase(); }

  switch (string) {
    case 'true':
    case 1:
    case '1':
    case 'yes':
      return true;
    case 'false':
    case 0:
    case '0':
    case 'no':
    case 'null':
    case null:
      return false;
    default:
      //return Boolean(string);
      return false;
  }

}

function string_to_integer (string) {
  return parseInt(string, 10);
}

function get_timestamp () {
  // Old: return parseInt(((new Date).getTime()) / 1000);
  return Math.floor(Date.now() / 1000);
}

function get_timestamp_ms () {
  return Date.now();
}

// http://stackoverflow.com/questions/9407892/how-to-generate-random-sha1-hash-to-use-as-id-in-node-js
function uuid_random () {
  return crypto.randomBytes(16).toString('hex');
}

function uuid () {

  // Generate new UUID v4
  var v4 = node_uuid.v4();

  // Return without hyphens/dashes
  return v4.replace(/-/g, '');

}

// TODO: This is not a full URL Decode, just spaces
function url_decode (string) {
  return decodeURIComponent((string + '').replace(/\+/g, '%20'));
}

// Exports
module.exports = {
  in_array          : in_array,
  is_integer        : is_integer,
  is_empty_object   : is_empty_object,
  string_to_boolean : string_to_boolean,
  string_to_integer : string_to_integer,
  get_timestamp     : get_timestamp,
  get_timestamp_ms  : get_timestamp_ms,
  uuid_random       : uuid_random,
  uuid              : uuid,
  url_decode        : url_decode
};
