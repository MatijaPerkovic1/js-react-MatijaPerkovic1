import React from 'react';
import styles from './Forms.module.css';
import { Link, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react';
import { loginUser } from '../services/login';
import useForm from 'react-hook-form';


function LoginComponent(props) {
	const { register, handleSubmit, errors} = useForm();
	function handleLoginClick(data) {
		props.onLogin(props, data.username, data.password);
	}
	return(
		<div id={styles.formContainer}>
			<form id={styles.form} onSubmit={handleSubmit(handleLoginClick)}>
				<h2 className={styles.title}>Login</h2>
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
				<button id={styles.formButton}>
					Login
				</button>
				<p>Don't have an account?</p>
				<Link to="/register"><a href="">Register here</a></Link>
			</form>
		</div>
	)
}
export const Login = observer(LoginComponent);