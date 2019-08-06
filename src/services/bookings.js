import { get } from './flighterApi';
export function getBookings(appState) {
  return get('bookings')
    .then((response) => response.bookings)
    .then((bookings) => (appState.bookings = bookings));
}