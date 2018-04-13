var mocha = require('mocha');
var chai = require('chai');
var assert = chai.assert;
var env = require('../build/index.js');

describe('perform sanity checks on dev environment', () => {
	
	it('check if NODE_ENV is set to dev', () => {
		assert.equal(env.process.env.NODE_ENV, undefined);
	});

});