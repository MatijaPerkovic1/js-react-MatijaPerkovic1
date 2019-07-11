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

	function filterFlights(flight, option, filterText) {
		const flightArrivalAndDeparture = flight.name.split('-');
		if(option === 1) { //filter by arrival
			if(flightArrivalAndDeparture[1].includes(filterText)) return flight;
		} else { //filter by departure
			if(flightArrivalAndDeparture[0].includes(filterText)) return flight;
		}
	}


	function onArrivalInputChange(e) {
		setDisplayedFlights(displayedFlights.filter((flight) => filterFlights(flight, 1, e.target.value)));
	}

	function onDepartureInputChange(e){
		setDisplayedFlights(displayedFlights.filter((flight) => filterFlights(flight, 0, e.target.value)));
	}


	const allFlights = displayedFlights.map((flight) => <Flight key={flight.id} flight={flight} />);

	return (
	<div>
		Search by arrival: <input onChange={onArrivalInputChange} type="text" name="arrival"/> <br />
		<br/>Search by departure: <input onChange={onDepartureInputChange} type="text" name="departure" on/>
		{allFlights}
	</div>
	);
}

ReactDOM.render(<FlightsApp />, document.getElementById('root'));
