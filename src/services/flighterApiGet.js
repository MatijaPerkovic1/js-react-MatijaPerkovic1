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