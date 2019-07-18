import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAsync } from 'react-use';
import Flight from '../components/Flight';
import Login from '../components/Login';
import styles from './FlightsApp.module.css';
import { appState } from '../state/AppState';
import { observer } from 'mobx-react';
import { loadFlights } from '../services/flights';
import { Navbar } from '../components/Navbar';

function FlightsAppContainer() {
	localStorage.getItem('token') ? (appState.isLoggedIn = true) : (appState.isLoggedIn = false);
	useAsync(loadFlights.bind(null, appState));
	function onFilterChange(e) {
		setFilter(e.target.value);
	}
	const [filter, setFilter] = useState("");

	return (
	<div>
		<div id ={styles.main}>
			<Navbar />
			<div id={styles.search}>
				<h2 className={styles.title}>Find best flight for you and your friends!</h2>
				<div id={styles.searchoptions}>
				<select>
					<option>01 FEB 2019</option>
				</select>
				<input onChange={onFilterChange} value={filter} type="text" name="arrival"/>
				<select>
					<option>4 PEOPLE</option>
				</select>
				<button>SEARCH</button>
				</div>
			</div>
			<p id={styles.results}>RESULTS</p>
			<div className={styles.wrapper}>
				{!appState.isLoggedIn && <p>LOG IN TO SEE AVAILABLE FLIGHTS!</p>}
				{appState.flights && appState.flights.filter((flight) => flight.name.includes(filter)).map((flight) => <Flight key={flight.id} flight={flight} />)}
			</div>
		</div>
	</div>
	);
}

export const FlightsApp = observer(FlightsAppContainer);
