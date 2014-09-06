# popo [![Build Status](https://secure.travis-ci.org/isRuslan/popo.png?branch=master)](http://travis-ci.org/isRuslan/popo)

> Simple way to implement polymorphism in javascript

## Install

Install with npm:

```
npm install --save popo
```

Install with bower:

```
bower install --save popo
```

## Usage
> There is only possible overload function by arguments number

`Node.js`

```
var popo = require('popo');

var sayHello = popo({
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
`Browser`

```
popo({
	0: function () {
		return 'Hello Anonymous!';
	},
	1: function (name) {
		return 'Hello ' + name + '!';
	}
}, function otherWay () {
	return 'Do I need to say Hello?';
});
```


## TODO
 - overload by type
 - better implementation of `default` function

## Test

From the repo root:

```
npm test
```
## License
Copyright (c) 2014 Ruslan Ismagilov. Licensed under the MIT license.
