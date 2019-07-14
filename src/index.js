import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import FlightsApp from './flightsapp.js';

function App() {
	return (
	<div>
		<Router>
			<Route exact path="/" component={FlightsApp} />
		</Router>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
