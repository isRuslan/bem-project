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
		}, function () {
			return 'default';
		});
		done(); 
	});

  it('should say `Hello Empty!`', function () {
    expect(sayHello()).to.equal('Hello Empty!');
  });

  it('should say `Hello Batman!`', function () {
    expect(sayHello('Batman')).to.equal('Hello Batman!');
  });

  it('should call default', function () {
    expect(sayHello('Superman', 'Robin')).to.equal('default');
  });
});
