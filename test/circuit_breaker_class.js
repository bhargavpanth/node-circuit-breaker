var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var cb = require('../build/circuit_breaker.js');

// Object.getOwnPropertyNames();
// console.log(Object.keys(cb));

describe('checks for circuit_breaker ', () => {

	it('should pass the test within 5 seconds', () => {
		let test = new circuit_breaker('https://github.com', 5000).handle();
		assert.equal(test, Object)
	});

});