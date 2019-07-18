import React from 'react';
import { registerUser } from '../services/register';
import styles from './Forms.module.css';
import { Redirect } from 'react-router-dom';

export default function Register() {

	const [ fullName, setFullName] = React.useState("");
	const [ redirect, setRedirect ] = React.useState(false);
	const [ email, setEmail] = React.useState("");
	const [ password, setPassword] = React.useState("");
	const [ confirmPassword, setConfirmPassword ] = React.useState("");
	const [ passwordError, setPasswordError ] = React.useState(false);


	function handleFullNameChange (e) {
		setFullName(e.target.value);
	}
	function handleEmailChange (e) {
		setEmail(e.target.value);
	}
	function handlePasswordChange (e) {
		setPassword(e.target.value);
	}
	function handleConfirmPasswordChange (e) {
		setConfirmPassword(e.target.value);
		(e.target.value !== password) ? setPasswordError(true) : setPasswordError(false);
	}
	function handleRegisterClick() {
		registerUser(email, fullName, password);
		setRedirect(true);
	}

	return(
		<div id={styles.formContainer}>
		{redirect && <Redirect to="/login" />}
			<div id={styles.form}>
				<h2 className={styles.title}>Register</h2>
				<input className={styles.formInput} placeholder="Full name" value={fullName} onChange={handleFullNameChange} /><br />
				<input className={styles.formInput} placeholder="Email" value={email} onChange={handleEmailChange} /><br />
				<input className={styles.formInput} type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
				<input className={styles.formInput} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} /> {passwordError && <pre className={styles.errorMessage}>Passwords don't match!</pre>}<br />
				<button id={styles.formButton} disabled={!fullName || !email || !password || !confirmPassword || passwordError} onClick={handleRegisterClick}>
					Register
				</button>
			</div>
		</div>
	)
}