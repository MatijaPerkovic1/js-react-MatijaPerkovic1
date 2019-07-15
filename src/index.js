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

	const [loading, setLoading] = useState(true);
	const [flights, setFlights] = useState([]);
	const [filter, setFilter] = useState("");

	useEffect(() => {
		getAllFlights().then(data => {
			setFlights(data.flights);
			});
	}, []);

	function onInputChange(e) {
		setFilter(e.target.value);
	}

	return (
	<div>
		Search: <input onChange={onInputChange} value={filter} type="text" name="arrival"/> <br />
		{flights.filter((flight) => flight.name.includes(filter)).map((flight) => <Flight key={flight.id} flight={flight} />)}
	</div>
	);
}

ReactDOM.render(<FlightsApp />, document.getElementById('root'));
