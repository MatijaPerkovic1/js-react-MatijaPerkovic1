import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import FlightsApp from './flightsapp.js';
import Login from './components/login.js';
import Register from './components/register.js';

function App() {
	return (
	<div>
		<Router>
			<Route exact path="/" component={FlightsApp} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
