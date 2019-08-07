export function post(model, body) {
const options = {
		method: 'POST',
	    headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'Authorization': localStorage.getItem('token') 
	    },
	    body: body
}
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, options)
    .then((response) => response.json());
}
export function put(model, body) {
const options = {
		method: 'PUT',
	    headers: {
		    'Accept': 'application/json',
		    'Content-Type': 'application/json',
		    'Authorization': localStorage.getItem('token') 
	    },
	    body: body
}
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, options)
    .then((response) => response.json());
}
export function get(model) {
const options = {
	headers: {
		'Authorization': localStorage.getItem('token'),
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}
  return fetch(`https://flighter-hw7.herokuapp.com/api/${model}`, options)
    .then((response) => response.json());
}