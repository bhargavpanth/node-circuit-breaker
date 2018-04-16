/*
Capture response and check for a timeout
*/

import fetch from 'node-fetch';

// let env = process.env.NODE_ENV = 'test';

class circuit_breaker{

	// default wait timeout is set to 10 unless explicitly mentioned
	constructor(url, timeout = 10){
		this.url = url;
		this.timeout = timeout;
	};

	fetch(){
		return new Promise( (resolve, reject) => {
			request(this.url);
		});
	};

	wait(){
		let timeout = new Promise( (resolve, reject) => {
			let time = setTimeout(() => {
				clearTimeout(time);
				reject('request timed out at ' + this.timeout + ' seconds');
			});
		});

		return Promise.race([promise, timeout]);
	};

	handle() {
		// hit a request and start a setTimeout function
		return new Promise.race([this.fetch, this.wait]) 
	};

};

export default circuit_breaker;