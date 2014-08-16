
'use strict';

// Modules
var _ = require('lodash');

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

// Exports
module.exports = {
  in_array        : in_array,
  is_integer      : is_integer,
  is_empty_object : is_empty_object
};
