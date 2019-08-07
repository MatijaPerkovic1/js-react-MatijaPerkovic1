import React, { useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useAsync } from 'react-use';
import { Flight } from '../components/Flight';
import styles from './FlightsApp.module.css';
import globalStyles from './GlobalStyles.module.css';
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
	function onNoOfPassengersChange(e) {
		appState.numberOfPassengers = e.target.value;
	}
	function onDateChange(e) {
		console.log(e.target.value);
		console.log(appState.flightDate);
		appState.flightDate = e.target.value;
	}

	return (
	<div>
		<div id={styles.main}>
			<Route path="/"  render={(props) => <Navbar {...props} onLogOut={onLogOut} />}/>
			<div id={styles.search}>
				<h2 className={globalStyles.blueHeading}>Find best flight for you and your friends!</h2>
				<div id={styles.searchoptions}>
				<input type="date" onChange={onDateChange}/>
				<input onChange={onFilterChange} value={appState.flightsFilter} type="text" name="arrival"/>
				<select onChange={onNoOfPassengersChange}>
					<option value={1}>1 PERSON</option>
					<option value={2}>2 PEOPLE</option>
					<option value={3}>3 PEOPLE</option>
					<option value={4}>4 PEOPLE</option>
				</select>
				<button>SEARCH</button>
				</div>
			</div>
			<p id={styles.results} className={globalStyles.neutralHeading}>RESULTS</p>
			<div className={styles.wrapper}>
				{!appState.isLoggedIn && <p>LOG IN TO SEE AVAILABLE FLIGHTS!</p>}
				{(appState.isLoggedIn && appState.flights) && <FlightList flights={appState.filteredFlights} />}
			</div>	
		</div>
	</div>
	);
}

export const FlightsApp = observer(FlightsAppContainer);
