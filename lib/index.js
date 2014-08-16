
'use strict';

// Modules
var _ = require('lodash');

function in_array (array) {
  return function (value) {
    return _.indexOf(array, value) !== -1;
  };
}

// Exports
module.exports = {
  in_array : in_array
};
