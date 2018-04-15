var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;

describe('perform sanity checks on dev environment', () => {
	
	it('check if NODE_ENV is set to dev', () => {
		assert.equal(env.process.env.NODE_ENV, undefined);
	});

});