import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import styles from '../containers/FlightsApp.module.css';
import { AppContext } from '../state/AppContext';

function NavbarComponent(props){
	const { appState } = React.useContext(AppContext);
	function handleLogOutClick() {
		props.onLogOut(props)
	}
	return (
		<div id={styles.navbar}>
			<div id={styles.navbarButtons}>
			{ !appState.isLoggedIn && <Link to="/login"><button>Login</button></Link>}
			{ !appState.isLoggedIn && <Link to="/register"><button>Register</button></Link>}
			{ appState.isLoggedIn && <button onClick={handleLogOutClick}>Log out</button>}
			{ appState.isLoggedIn && <Link to="/myprofile"><button>My profile</button></Link>}
			</div>
		</div>
	)
}
export const Navbar = observer(NavbarComponent);