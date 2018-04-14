/*
Capture response and check for a timeout
*/

// import fetch from 'node-fetch';
import request from 'request';

// let env = process.env.NODE_ENV = 'test';

export default class circuit_breaker{

	// default wait timeout is set to 10 unless explicitly mentioned
	constructor(url, timeout = 10){
		this.url = url;
		this.timeout = timeout;
	};

	fetch(){

	};

	wait(){

	};

	handle() {
		// hit a request and start a setTimeout function
		return new Promise( (resolve, reject) => {
			if () {
				// request is successful and returns within this.timeout
				resolve();
			} else {
				// request has timed out or service is down
				reject();
				// handle closing the circuit here
			}
		});
	};

};
