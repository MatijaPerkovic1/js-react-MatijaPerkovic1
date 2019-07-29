import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useAsync } from 'react-use';
import { Flight } from '../components/Flight';
import { Login } from '../components/Login';
import styles from './FlightsApp.module.css';
import { AppContext } from '../state/AppContext';
import { observer } from 'mobx-react';
import { loadFlights } from '../services/flights';
import { FlightList } from '../components/FlightList';
import { Navbar } from '../components/Navbar';

function FlightsAppContainer() {
	const { appState } = React.useContext(AppContext);
	
	useAsync(loadFlights.bind(null, appState), [appState.token]);

	function onFilterChange(e) {
		appState.flightsFilter = e.target.value;
	}
	function onLogOut(props) {
		localStorage.removeItem('token');
		appState.token = '';
		appState.flights = [];
		props.history.push('/');
	}

	return (
	<div>
		<div id={styles.main}>
			<Route path="/"  render={(props) => <Navbar {...props} onLogOut={onLogOut} />}/>
			<div id={styles.search}>
				<h2 className={styles.title}>Find best flight for you and your friends!</h2>
				<div id={styles.searchoptions}>
				<select>
					<option>01 FEB 2019</option>
				</select>
				<input onChange={onFilterChange} value={appState.flightsFilter} type="text" name="arrival"/>
				<select>
					<option>4 PEOPLE</option>
				</select>
				<button>SEARCH</button>
				</div>
			</div>
			<p id={styles.results}>RESULTS</p>
			<div className={styles.wrapper}>
				{!appState.isLoggedIn && <p>LOG IN TO SEE AVAILABLE FLIGHTS!</p>}
				{appState.isLoggedIn && <FlightList flights={appState.filteredFlights} />}
			</div>
		</div>
	</div>
	);
}

export const FlightsApp = observer(FlightsAppContainer);
