import { post } from './fligherApiPost.js';

export function bookFlight(no_of_seats, flightId) {
	const body = JSON.stringify({
  "booking": {
    "no_of_seats": no_of_seats,
    "flight_id": flightId
    }
  })
  return post('bookings', body)
  	.then((response) => console.log(response));
}