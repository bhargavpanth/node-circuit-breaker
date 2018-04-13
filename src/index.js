/*
Capture response and check for a timeout
*/

import fetch from 'node-fetch';

let env = process.env.NODE_ENV = 'test';

export default class circuit_breaker{

	// default wait timeout is set to 10 unless explicitly mentioned
	constructor(request, url, timeout = 10){
		this.request = request;
		this.url = url;
		this.timeout = timeout;
	}

	handle(){
		new Promise( (resolve, reject) => {
		//  
			fetch(this.url)
				.then()
				.catch();
		
		});
	}

}
