import React from 'react';
import { AppContext } from '../state/AppContext';
import { Link, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import styles from '../containers/FlightsApp.module.css';

function NavbarComponent(){
	const { appState } = React.useContext(AppContext);

	const [redirect, setRedirect] = React.useState(false);
	function handleLogOut() {
		localStorage.removeItem('token');
		appState.token = '';
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
export const Navbar = observer(NavbarComponent);