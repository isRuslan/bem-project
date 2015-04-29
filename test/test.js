var expect = require('chai').expect;
var popo = require('..');

describe('init sayHello', function () {
	var sayHello;
	before(function(done) {
		sayHello = popo(function () {
        return 'Hello Anonymous!';
      },
      function (name) {
        return 'Hello ' + name + '!';
      }).other(function () {
        return [].slice(arguments);
      });

		done(); 
	});

  it('should say `Hello Anonymous!`', function () {
    expect(sayHello()).to.equal('Hello Anonymous!');
  });

  it('should say `Hello Batman!`', function () {
    expect(sayHello('Batman')).to.equal('Hello Batman!');
  });

  it('should call default', function () {
    expect(sayHello('Superman', 'Robin')).to.equal(['Superman', 'Robin']);
  });
});
