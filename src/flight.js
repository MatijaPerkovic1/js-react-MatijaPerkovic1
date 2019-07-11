import React, { useState} from 'react';
import { useLocalStorage } from 'react-use';

function Flight(props) {

	const [bookedSeats, setBookedSeats] = useState(props.flight.no_of_booked_seats);
	const [currentPrice, setCurrentPrice] = useState(props.flight.current_price);

	return(
	<div>
		<h3>{props.flight.name}</h3>
		<h4>{props.flight.company_name}</h4>
		<p>Flys at: {(() => {
			let flysAtDate = new Date(props.flight.flys_at)
			return flysAtDate.toLocaleString('hr');
		})()}</p>
		<p>Lands at: {(() => {
			let landsAtDate = new Date(props.flight.lands_at)
			return landsAtDate.toLocaleString('hr');
		})()}</p>
		<p>${currentPrice}</p>
		<p>Seats left: {props.flight.no_of_seats- bookedSeats}</p>
		{<button>Book!</button>}
	</div>
	)
}

export default Flight;