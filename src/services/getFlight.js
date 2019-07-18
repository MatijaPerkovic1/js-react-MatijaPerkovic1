import { get } from './flighterApi';
const options = {
	headers: {
		'Authorization': localStorage.getItem('token'),
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}
export function getFlight(uri) {
  return get(uri, options)
    .then((response) => response.flight)
}