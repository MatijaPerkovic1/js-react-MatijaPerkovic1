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
	const [displayedFlights, setDisplayedFlights] = useState([]);

	useEffect(() => {
		getAllFlights().then(data => {
			setFlights(data.flights);
			setDisplayedFlights(data.flights);
			});
	}, []);

	const allFlights = displayedFlights.map((flight) => <Flight key={flight.id} flight={flight} />);

	return (
	<div>

		{allFlights}
		
	</div>
	);
}

ReactDOM.render(<FlightsApp />, document.getElementById('root'));
