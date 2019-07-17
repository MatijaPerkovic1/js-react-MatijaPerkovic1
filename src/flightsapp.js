import React, { useState, useEffect } from 'react';
import { useAsync } from 'react-use';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Flight from './flight.js';
import './landing.css';

function FlightsApp() {

	function getAllFlights() {
		return fetch('https://flighter-hw7.herokuapp.com/api/flights', {
        	headers: {
	        	'Authorization': 'FoQZftPkvXppHhf3tbTpHr6Z',
	        	'Accept': 'application/json',
	            'Content-Type': 'application/json'  
        	}
        })
        .then((response) => response.json())
        .then((response) => response.flights);
	};

	const [filter, setFilter] = useState("");
	const { value: flights } = useAsync(getAllFlights);

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
		{flights && flights.filter((flight) => flight.name.includes(filter)).map((flight) => <Flight key={flight.id} flight={flight} />)}
	</div>
	</div>
	</div>
	);
}

export default FlightsApp;
