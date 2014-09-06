'use strict';
/**
 * Welcome to the Popo!
 */
(function (exports) {

/**
 * @constructor popo
 *
 * @param {Object} opt Initialization object
 * @return {Function} other `Default` function
 */
function popo (opt, other) {
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

	return function() {
    return !!~keys.indexOf(arguments.length.toString())
    	? opt[arguments.length].apply(this, arguments)
    	: other.apply(this, arguments);
  }
}

/**
 * Module exports
 */
module.exports = popo;

})(typeof module.exports === 'undefined' ? this['popo'] = {} : module.exports);