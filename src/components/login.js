import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

export default function Login() {

	const [ username, setUsername ] = React.useState("");
	const [ password, setPassword ] = React.useState("");
	const [ token, setToken ] = useLocalStorage('token', '');

	function loginUser() {
		fetch('https://flighter-hw7.herokuapp.com/api/session', {
			method: 'POST',
        	headers: {
	        	'Accept': 'application/json',
	            'Content-Type': 'application/json'  
        	},
        	body: JSON.stringify({
        		"session": {
        			"email": username,
        			"password": password
        		}
        	})
        })
        .then((response) => response.json())
        .then((response) => setToken(response.session.token));
	}
	function handleUsernameChange (e) {
		setUsername(e.target.value);
	}
	function handlePasswordChange (e) {
		setPassword(e.target.value);
	}
	return(
		<div id="form-container">
			<div id ="form">
				<h2 className="title">Login</h2>
				<input className="form-input" placeholder="Username" value={username} onChange={handleUsernameChange} /><br />
				<input className="form-input" type="password" placeholder="Password" value={password} onChange={handlePasswordChange} /><br />
				<input type="checkbox" /><span>Remember me</span><br />
				<button id="form-button" onClick={loginUser}>
					Login
				</button>
				<p>Don't have an account?</p>
				<Link to="/register"><a href="">Register here</a></Link>
			</div>
		</div>
	)
}