'use strict';

/**
 * @constructor Poly
 *
 * @param {}
 * @return {}
 */
function Poly (opt, other) {
	var keys = [];

	// check
	for (var i in opt) {
		if (opt.hasOwnProperty(i)) {
			if ( typeof opt[i] != "function" ) {
				opt[i] = undefined;
			} else {
				keys.push(i);
			}
		}
	}
	// need to check arguments
	return function() {
    return !!~keys.indexOf(arguments.length.toString())
    	? opt[arguments.length].apply(this, arguments)
    	: other.apply(this, arguments);
  }
}

/**
 * Module exports
 */
module.exports = Poly;
