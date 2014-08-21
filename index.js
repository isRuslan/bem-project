'use strict';

/**
 * @constructor Poly
 *
 * @param {}
 * @return {}
 */
function Poly (opt) {
	// check
	for (var i in opt) {
		if (opt.hasOwnProperty(i)) {
			if ( typeof opt[i] != "function" ) {
				opt[i] = undefined;
			}
		}
	}

	return function() {
    return opt[arguments.length].apply(this, arguments);
  }
}

/**
 * Module exports
 */
module.exports = Poly;
