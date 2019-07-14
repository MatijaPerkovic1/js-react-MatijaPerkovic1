import React from 'react';
import './login.css';

export default function Login() {
	return(
		<div id="form-container">
		<div id ="form">
		<h2 className="title">Login</h2>
		<input className="form-input" placeholder="Username"/><br />
		<input className="form-input" type="password" placeholder="Password" /><br />
		<input type="checkbox" /><span>Remember me</span><br />
		<button id="form-button">
		Login
		</button>
		<p>Don't have an account?</p>
		<a href="">Register here</a>
		</div>
		</div>
	)
}