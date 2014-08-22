# poly [![Build Status](https://secure.travis-ci.org/user/poly.png?branch=master)](http://travis-ci.org/user/poly)

> Simple way to overload functions in javascript

## Install

Install with npm:

```
npm install --save poly
```

## Usage
> There is only possible overload by arguments number

```
var poly = require('poly');

var sayHello = poly({
	0: function () {
		return 'Hello Anonymous!';
	},
	1: function (name) {
		return 'Hello ' + name + '!';
	}
}, function otherWay () {
	return 'Do I need to say Hello?';
});

sayHello(); // 'Hello Anonymous!';
sayHello('Haruki'); // 'Hello Haruki!';
sayHello('Haruki', 'Murakami'); // 'Do I need to say Hello?';

```

## Test

From the repo root:

```
npm test
```
## License
Copyright (c) 2014 Ruslan Ismagilov. Licensed under the MIT license.
