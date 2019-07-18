import React from 'react';
import styles from './Forms.module.css';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../services/login';
import { loadFlights } from '../services/flights';
import { appState } from '../state/AppState';
export default function Login() {
	const [ username, setUsername ] = React.useState("");
	const [ password, setPassword ] = React.useState("");
	const [ redirect, setRedirect ] = React.useState(false);
	function handleLoginClick() {
		loginUser(username, password);
		loadFlights.bind(null, appState);
		setRedirect(true);
	}
	function handleUsernameChange (e) {
		setUsername(e.target.value);
	}
	function handlePasswordChange (e) {
		setPassword(e.target.value);
	}
	return(
		<div id={styles.formContainer}>
			{redirect && <Redirect to="/" />}
			<div id={styles.form}>
				<h2 className={styles.title}>Login</h2>
				<input className={styles.formInput} placeholder="Username" value={username} onChange={handleUsernameChange} /><br />
				<input className={styles.formInput} type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
				<input type="checkbox" /><span>Remember me</span><br />
				<button id={styles.formButton} onClick={handleLoginClick} disabled={!username || !password}>
					Login
				</button>
				<p>Don't have an account?</p>
				<Link to="/register"><a href="">Register here</a></Link>
			</div>
		</div>
	)
}