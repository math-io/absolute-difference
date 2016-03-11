'use strict';

// MODULES //

var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var abs = require( 'math-abs' );


// ABSOLUTE DIFFERENCE //

/**
* FUNCTION: diff( x, y )
*	Computes the absolute difference.
*
* @param {Number} x - first number
* @param {Number} y - second number
* @returns {Number} absolute difference
*/
function diff( x, y ) {
	if ( x !== x || y !== y ) {
		return NaN;
	}
	if (
		x === PINF ||
		y === PINF ||
		x === NINF ||
		y === NINF
	) {
		if ( x === y ) {
			return NaN;
		}
		return PINF;
	}
	return abs( x - y );
} // end FUNCTION diff()


// EXPORTS //

module.exports = diff;
