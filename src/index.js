import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { FlightsApp } from './containers/FlightsApp';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { FlightDetails } from './components/FlightDetails';

function PrivateRoute({ isLoggedIn, Component, ...rest }) {
  function render(props) {
    return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  }

  return <Route {...rest} component={render} />;
}

function App() {
	const LoggedIn = localStorage.getItem('token') ? true : false;
	return (
	<div>
		<Router>
			<PrivateRoute isLoggedIn={LoggedIn} path={`/flights/:id`} Component={FlightDetails} />
			<Route exact path="/" component={FlightsApp} />
			<Route path="/login" component={Login} />
			<Route path="/register" component={Register} />
		</Router>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
