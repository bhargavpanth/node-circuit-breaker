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

	handle() {
		
		let req = new Promise( (resolve, reject) => {
			fetch(this.url);
		});

		let timeout = new Promise( (resolve, reject) => {
			let time = setTimeout(() => {
				clearTimeout(time);
				reject('request timed out at ' + this.timeout + ' seconds');
			});
		});
		// hit a request and start a setTimeout function
		
		Promise.race([req, timeout]).then( () => {
			console.log(`Response`);
		}).catch( () => {
			console.log(`Unable to fetch the request on time - setting circuit breaker`);
		});
	
	};

};

let test = new circuit_breaker('http://github.com', 10)
test.handle();

export default circuit_breaker;