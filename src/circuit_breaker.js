/*
Capture response and check for a timeout
*/

import fetch from 'node-fetch';


// let env = process.env.NODE_ENV = 'test';

class circuit_breaker{

	// default wait timeout is set to 10 unless explicitly mentioned
	constructor(url, timeout = 5000){
		this.url = url;
		this.timeout = timeout;
	};

	handle() {
		/* Promise - request */
		let req = new Promise( (resolve, reject) => {
			console.log(this.url);
			fetch(this.url)

			.then((data) => {
				resolve(`Request going through fine`);
			})
			
			.catch((err) => {
				reject(err);
			});
		});

		/* Promise - timeout */
		let timeout = new Promise( (resolve, reject) => {
			let time = setTimeout(() => {
				clearTimeout(time);
				reject(`request timed out after ${this.timeout}  milliseconds`);
				/* close the circuit and set a flag to indicate the service is down */
			}, this.timeout);
		});
		

		/* Promise race condition */
		Promise.race([req, timeout])

		.then( (res) => {
			console.log(`${res}`);
		});
	
	};

};

let test = new circuit_breaker('https://bhargavrpanth.com', 5000).handle();

export default circuit_breaker;