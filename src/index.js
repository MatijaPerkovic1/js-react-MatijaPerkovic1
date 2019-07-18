import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { FlightsApp } from './containers/FlightsApp';
import Login from './components/Login';
import Register from './components/Register';
import { FlightDetails } from './components/FlightDetails';

function App() {
	return (
	<div>
		<Router>
			<Route path={`/flights/:id`} component={FlightDetails} />
			<Route exact path="/" component={FlightsApp} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
