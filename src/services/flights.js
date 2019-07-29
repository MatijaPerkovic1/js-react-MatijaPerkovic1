import { get } from './flighterApiGet';
export function loadFlights(appState) {
  return get('flights')
    .then((response) => response.flights)
    .then((flights) => (appState.flights = flights));
}