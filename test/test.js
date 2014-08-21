var expect = require('chai').expect;
var poly = require('..');

describe('init sayHello', function () {
	var sayHello;
	before(function(done) {
		sayHello = poly({
			0: function () {
				return 'Hello Empty!';
			},
			1: function (name) {
				return 'Hello ' + name + '!';
			}
		});
		done();
	});

  it('should say `Hello Empty!`', function () {
    expect(sayHello()).to.equal('Hello Empty!');
  });

  it('should say `Hello Batman!`', function () {
    expect(sayHello('Batman')).to.equal('Hello Batman!');
  });

  it('should say ', function () {
    expect(sayHello('Superman', 'Robin')).to.equal('Hello Empty!');
  });
});
