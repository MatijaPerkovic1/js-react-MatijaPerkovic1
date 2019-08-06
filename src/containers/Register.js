import React from 'react';
import { registerUser } from '../services/register';
import styles from './Forms.module.css';
import globalStyles from './GlobalStyles.module.css';
import { Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import useForm from 'react-hook-form';

function RegisterComponent(props) {

	const { register, handleSubmit, errors } = useForm();

	function onRegisterClick(data) {
		registerUser(data.email, data.fullName, data.password);
		props.history.push('/');
	}

	return(
		<div>
			<form className={styles.form} onSubmit={handleSubmit(onRegisterClick)}>
				<h2 className={globalStyles.blueHeading}>Register</h2>
				<input 
					className={styles.formInput} 
					placeholder="Full name" 
					name="fullName" 
					ref={register} /><br />
				<input 
					className={styles.formInput} 
					type="password" 
					placeholder="Password" 
					name="password"
					ref={register} /><br />
				<input 
					className={styles.formInput} 
					type="password" 
					placeholder="Confirm Password" 
					name="confirmPassword"
					ref={register} /><br />
				<input 
					className={styles.formInput} 
					placeholder="Email" 
					name="email"
					ref={register} /><br />
				<button className={`${globalStyles.button} ${styles.formButton}`} type="submit">
					Register
				</button>
			</form>
		</div>
	)
}
export const Register = observer(RegisterComponent);