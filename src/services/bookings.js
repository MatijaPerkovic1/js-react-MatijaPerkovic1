import { get } from './flighterApiGet';
export function getBookings(appState) {
  return get('bookings')
    .then((response) => response.bookings)
    .then((bookings) => (appState.bookings = bookings));
}