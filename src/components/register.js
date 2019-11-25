import React from 'react';

export default function Register() {

	const [ fullName, setFullName] = React.useState("");
	const [ email, setEmail] = React.useState("");
	const [ password, setPassword] = React.useState("");
	const [ confirmPassword, setConfirmPassword ] = React.useState("");
	const [ passwordError, setPasswordError ] = React.useState(false);

	function registerUser() {
		fetch('https://flighter-hw7.herokuapp.com/api/users', {
			method: 'POST',
        	headers: {
	        	'Accept': 'application/json',
	            'Content-Type': 'application/json'  
        	},
        	body: JSON.stringify({
        		"user": {
        			"email": email,
        			"first_name": fullName.split(" ")[0],
        			"last_name": fullName.split(" ")[1],
        			"password": password
        		}
        	})
        });
	}

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
		(confirmPassword !== password) ? setPasswordError(true) : setPasswordError(false)
	}

	return(
		<div id="form-container">
			<div id ="form">
				<h2 className="title">Register</h2>
				<input className="form-input" placeholder="Full name" value={fullName} onChange={handleFullNameChange} /><br />
				<input className="form-input" placeholder="Email" value={email} onChange={handleEmailChange} /><br />
				<input className="form-input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
				{passwordError && <p>err</p>}
				<input className="form-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} /><br />
				<button id="form-button" onClick={registerUser}>
					Register
				</button>
			</div>
		</div>
	)
}