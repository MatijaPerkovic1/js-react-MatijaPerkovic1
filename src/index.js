import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Flight from './flight.js';

function FlightsApp() {

	async function getAllFlights() {
		const response = await fetch('https://flighter-hw7.herokuapp.com/api/flights', {
        	headers: {
	        	'Authorization': 'FoQZftPkvXppHhf3tbTpHr6Z',
	        	'Accept': 'application/json',
	            'Content-Type': 'application/json'  
        	}
        });
		const data = response.json();
		return data;
	};

	const [flights, setFlights] = useState([]);

	useEffect(() => {
		getAllFlights().then(data => {
			setFlights(data.flights);
			});
	}, []);

	

	return (
	<div>

		{flights.map((flight) => <Flight key={flight.id} flight={flight} />)}
		
	</div>
	);
}

ReactDOM.render(<FlightsApp />, document.getElementById('root'));
