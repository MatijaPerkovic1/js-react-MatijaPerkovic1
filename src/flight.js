import React, { useState} from 'react';
import { useLocalStorage } from 'react-use';

function Flight(props) {

	const [bookedSeats, setBookedSeats] = useState(props.flight.no_of_booked_seats);
	const [currentPrice, setCurrentPrice] = useState(props.flight.current_price);

	return(
	<div className="item">
		<img src="https://news.gtp.gr/wp-content/uploads/2019/04/Croatia-Airlines.jpg" />
		<div id="item-info">
		<p><b>Departs at {(() => {
			let flysAtDate = new Date(props.flight.flys_at)

			return `${flysAtDate.getHours()}:${flysAtDate.getMinutes()}`;
		})()}</b></p>
		<p>{props.flight.company_name}</p>
		<div>
			<span className="fa fa-star checked"></span>
			<span className="fa fa-star checked"></span>
			<span className="fa fa-star checked"></span>
		</div>
		<pre id="tickets">|  {props.flight.no_of_seats- bookedSeats} tickets available</pre>
		<pre>Price  <span id="price">{props.flight.current_price}$</span></pre>
		</div>
	</div>
	)
}

export default Flight;