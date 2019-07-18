import { get } from './flighterApi';
const options = {
	headers: {
		'Authorization': localStorage.getItem('token'),
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
}
export function loadFlights(appState) {
  return get('flights', options)
    .then((response) => response.flights)
    .then((flights) => (appState.flights = flights));
}