'use strict';

/**
 * Helper to normalize ID
 */
module.exports = function normalizeId(ret) {
  if (ret._id && ret._id.toString) {
    if (typeof ret.id === 'undefined') {
      ret.id = ret._id.toString();
    }
    // delete ret._id;
  }
};
