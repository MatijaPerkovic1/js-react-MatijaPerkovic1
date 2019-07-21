export function post(model, body) {
const options = {
		method: 'POST',
	    headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json'  
	    },
	    body: body
}
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, options)
    .then((response) => response.json());
}