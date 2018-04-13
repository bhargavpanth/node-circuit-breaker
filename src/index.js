/*
Capture response and check for a timeout
*/

import fetch from 'node-fetch';

let env = process.env.NODE_ENV = 'test';

export default class circuit_breaker{
	// default timeout wait time is set to 10 unless explicitly mentioned
	handle(request, url, timeout = 10){
		new Promise( (resolve, reject) => {
			fetch(url).then()
		});
	}
}
