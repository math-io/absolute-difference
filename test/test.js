'use strict';

// MODULES //

var tape = require( 'tape' );
var abs = require( 'math-abs' );
var PINF = require( 'const-pinf-float64' );
var NINF = require( 'const-ninf-float64' );
var EPS = require( 'const-eps-float64' );
var diff = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof diff, 'function', 'main export is a function' );
	t.end();
});

tape( 'if both `x` and `y` equal `+infinity`, the function returns `NaN`', function test( t ) {
	var d = diff( PINF, PINF );
	t.ok( d !== d, 'returns NaN' );
	t.end();
});

tape( 'if both `x` and `y` equal `-infinity`, the function returns `NaN`', function test( t ) {
	var d = diff( NINF, NINF );
	t.ok( d !== d, 'returns NaN' );
	t.end();
});

tape( 'if `x` or `y` equals `+infinity` and the other value equals any other number (beside +infinity), the function returns `+infinity`', function test( t ) {
	var values;
	var d;
	var i;

	values = [
		NINF,
		5,
		10,
		3.14,
		-1e308
	];

	for ( i = 0; i < values.length; i++ ) {
		d = diff( PINF, values[i] );
		t.equal( d, PINF, 'returns +infinity' );

		d = diff( values[i], PINF );
		t.equal( d, PINF, 'returns +infinity' );
	}
	t.end();
});

tape( 'if `x` or `y` equals `-infinity` and the other value equals any other number (beside -infinity), the function returns `+infinity`', function test( t ) {
	var values;
	var d;
	var i;

	values = [
		PINF,
		5,
		10,
		3.14,
		-1e308
	];

	for ( i = 0; i < values.length; i++ ) {
		d = diff( NINF, values[i] );
		t.equal( d, PINF, 'returns +infinity' );

		d = diff( values[i], NINF );
		t.equal( d, PINF, 'returns +infinity' );
	}
	t.end();
});

tape( 'if `x` and/or `y` is `NaN`, the function returns `NaN`', function test( t ) {
	var d;

	d = diff( NaN, 5 );
	t.ok( d !== d, 'returns NaN' );

	d = diff( 3, NaN );
	t.ok( d !== d, 'returns NaN' );

	t.end();
});

tape( 'the function computes the absolute difference', function test( t ) {
	var delta;
	var tol;
	var d;

	d = diff( 2, 5 );
	t.equal( d, 3, 'returns 3' );

	d = diff( -1, 3.14 );
	delta = abs( d - 4.14 );
	tol = EPS * 4.14;
	t.ok( delta <= tol, 'returns ~4.14' );

	d = diff( 10.1, -2.05 );
	delta = abs( d - 12.15 );
	tol = EPS * 12.15;
	t.ok( delta <= tol, 'returns ~12.05' );

	d = diff( -0, 0 );
	t.equal( d, 0, 'returns 0' );
	t.equal( 1/d, PINF, 'returns +0' );

	d = diff( 0, -0 );
	t.equal( d, 0, 'returns 0' );
	t.equal( 1/d, PINF, 'returns +0' );

	t.end();
});
