import React from 'react';
import { appState } from '../state/AppState';
import { Link, Redirect } from 'react-router-dom';
import styles from '../containers/FlightsApp.module.css';

export function Navbar(){
	const [redirect, setRedirect] = React.useState(false);
	function handleLogOut() {
		appState.isLoggedIn = false;
		localStorage.removeItem('token');
		appState.flights = [];
		setRedirect(true);
	}
	return (
		<div id={styles.navbar}>
			{redirect && <Redirect to='/' />}
			<div id={styles.buttons}>
			{ !appState.isLoggedIn && <Link to="/login"><button>Login</button></Link>}
			{ !appState.isLoggedIn && <Link to="/register"><button>Register</button></Link>}
			{ appState.isLoggedIn && <button onClick={handleLogOut}>Log out</button>}
			</div>
		</div>
	)
}