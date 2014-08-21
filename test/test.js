var expect = require('chai').expect;
var poly = require('..');

describe('poly()', function () {
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

  it('init', function () {
    // expect(true).to.equal(false);
  });
});
