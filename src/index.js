import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { useAsync } from 'react-use';
import { Provider } from 'mobx-react';
import { FlightsApp } from './containers/FlightsApp';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { registerUser } from './services/register';
import { FlightDetails } from './containers/FlightDetails';
import { appState } from './state/AppState';
import { bookFlight } from './services/book';
import { CreateBooking } from './components/CreateBooking';
import { loginUser } from './services/login';

function PrivateRoute({ isLoggedIn, Component, ...rest }) {
  function render(props) {
    return isLoggedIn ? <Component {...props} /> : <Redirect to="/" />;
  }

  return <Route {...rest} component={render} />;
}
function createBooking(props, noOfSeats, flightId){
	props.history.push('/');
	bookFlight(noOfSeats, flightId);
}
function onRegister(props, email, fullName, password){
	registerUser(email, fullName, password);
	props.history.push('/');
}
function onLogin(props, username, password) {
	props.history.push('/');
	loginUser(username, password);
}

function App() {
	const LoggedIn = localStorage.getItem('token') ? true : false;
	return (
	<div>
		<Provider appState={appState}>
			<Router>
				<PrivateRoute isLoggedIn={LoggedIn} path={`/flights/:id`} Component={FlightDetails} />
				<Route exact path="/" component={FlightsApp} />
				<Route path="/login"  render={(props) => <Login {...props} onLogin={onLogin} />}/>
				<Route path="/register" render={(props) => <Register {...props} onRegister={onRegister} />} />
				<Route path="/flights/:id/book" render={(props) => <CreateBooking {...props} createBooking={createBooking} />} />
			</Router>
		</Provider>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
