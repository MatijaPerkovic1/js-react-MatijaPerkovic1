import React from 'react';
import styles from './Forms.module.css';
import globalStyles from './GlobalStyles.module.css';
import { Link, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import { loginUser } from '../services/login';
import useForm from 'react-hook-form';


function LoginComponent(props) {
	const { register, handleSubmit, errors} = useForm();

	function handleLoginClick(data) {
		loginUser(data.username, data.password);
		props.history.push('/');
	}
	return(
		<div>
			<form className={styles.form} onSubmit={handleSubmit(handleLoginClick)}>
				<h2 className={globalStyles.blueHeading}>Login</h2>
				<input 
					className={styles.formInput} 
					placeholder="Username" 
					name="username"
					ref={register} /><br />
				<input 
					className={styles.formInput} 
					type="password" 
					placeholder="Password" 
					name="password"
					ref={register} /><br />
				<input type="checkbox" /><span>Remember me</span><br />
				<button className={`${globalStyles.button} ${styles.formButton}`}>
					Login
				</button>
				<p>Don't have an account?</p>
				<Link to="/register"><a href="">Register here</a></Link>
			</form>
		</div>
	)
}
export const Login = observer(LoginComponent);