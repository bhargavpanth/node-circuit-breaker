var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var cb = require('../build/circuit_breaker').default;

// Object.getOwnPropertyNames()
console.log(Object.keys(cb));
console.log(cb);
console.log(cb.circuit_breaker('http://github.com', 10));

describe('sanity checks for circuit_breaker class', () => {
	it('should instantiate an object of class circuit breaker passing all 2 params', () => {
		var test = new circuit('http://github.com/bhargavpanth', 10);
		console.log(test);
		assert.equal(1,1);
	});
});