Absolute Difference
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [absolute difference][absolute-difference] of two real numbers.

The [absolute difference][absolute-difference] of two real `numbers` is defined as

<div class="equation" align="center" data-raw-text="\|\delta\| = \| x - y \|" data-equation="eq:absolute_difference">
	<img src="https://cdn.rawgit.com/math-io/absolute-difference/548b01b7593d11e6679cb7487aecdb637deb5144/docs/img/eqn.svg" alt="Absolute difference">
	<br>
</div>


## Installation

``` bash
$ npm install math-absolute-difference
```


## Usage

``` javascript
var diff = require( 'math-absolute-difference' );
```

#### diff( x, y )

Computes the [absolute difference][absolute-difference] of two real numbers.

``` javascript
var d = diff( 2, 5 );
// returns 3

d = diff( -1, 3.14 );
// returns ~4.14

d = diff( 10.1, -2.05 );
// returns ~12.15

d = diff( -0, 0 );
// returns 0

d = diff( NaN, 5 );
// returns NaN

d = diff( 5, NaN );
// returns NaN

var PINF = Number.POSITIVE_INFINITY;
var NINF = Number.NEGATIVE_INFINITY;

d = diff( PINF, PINF );
// returns NaN

d = diff( NINF, NINF );
// returns NaN

d = diff( PINF, NINF );
// returns +infinity

d = diff( NINF, PINF );
// returns +infinity
```


## Examples

``` javascript
var diff = require( 'math-absolute-difference' );

var x;
var y;
var d;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.random()*1e4 - 1e2;
	y = Math.random()*1e4 - 1e2;
	d = diff( x, y );
	console.log( 'x = %d. y = %d. |x-y| = %d.', x, y, d );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors..


[npm-image]: http://img.shields.io/npm/v/math-absolute-difference.svg
[npm-url]: https://npmjs.org/package/math-absolute-difference

[build-image]: http://img.shields.io/travis/math-io/absolute-difference/master.svg
[build-url]: https://travis-ci.org/math-io/absolute-difference

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/absolute-difference/master.svg
[coverage-url]: https://codecov.io/github/math-io/absolute-difference?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/absolute-difference.svg
[dependencies-url]: https://david-dm.org/math-io/absolute-difference

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/absolute-difference.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/absolute-difference

[github-issues-image]: http://img.shields.io/github/issues/math-io/absolute-difference.svg
[github-issues-url]: https://github.com/math-io/absolute-difference/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[absolute-difference]: https://en.wikipedia.org/wiki/Absolute_difference
