import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Flight from './flight.js';
import './landing.css';

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
	<div id ="main">
	<div id="navbar">
		<div id="buttons">
			<Link to="/login"><button>Login</button></Link>
			<Link to="/register"><button>Register</button></Link>

		</div>
	</div>
	<div id="search">
		<h2 className="title">Find best flight for you and your friends!</h2>
		<div id="searchoptions">
		<select>
			<option>01 FEB 2019</option>
		</select>
		<input onChange={onInputChange} value={filter} type="text" name="arrival"/>
		<select>
			<option>4 PEOPLE</option>
		</select>
		<button>SEARCH</button>
		</div>

	</div>
	<p id="results">RESULTS</p>
	<div className="wrapper">
		{flights.filter((flight) => flight.name.includes(filter)).map((flight) => <Flight key={flight.id} flight={flight} />)}
	</div>
	</div>
	</div>
	);
}

export default FlightsApp;
