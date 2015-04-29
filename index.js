'use strict';
/**
 * Welcome to the Popo!
 */
(function () {

	/**
	 * @constructor popo
	 *
	 * @param {Object} opt Initialization object
	 * @return {Function} other `Default` function
	 */
	function popo () {
    var args = [].slice.call(arguments, 0)
		  , keys = {}, i = 0, func;

		// check
		for (;func = args[i++];) {
      if ( typeof func === 'function' ) {
        keys[func.length] = func;
      }
		}


		function result () {
	    return arguments.length in keys
	    	? keys[arguments.length].apply(this, arguments)
	    	: this.other.apply(this, arguments);
	  }


    result.other = function (fn) {
      return typeof fn === 'function' ? fn : function () { };
    };

    return result;
	}

	/**
	 * Module exports
	 */
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	  module.exports = popo;
	} else {
	  window.popo = popo;
	}

})();
