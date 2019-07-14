import React from 'react';

export default function Register() {
	return(
		<div id="form-container">
		<div id ="form">
		<h2 className="title">Register</h2>
		<input className="form-input" placeholder="Full name"/><br />
		<input className="form-input" placeholder="Email"/><br />
		<input className="form-input" type="password" placeholder="Password" /><br />
		<input className="form-input" type="password" placeholder="Confirm Password" /><br />
		<button id="form-button">
		Register
		</button>
		</div>
		</div>
	)
}