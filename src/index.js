import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { useAsync } from 'react-use';
import { Provider } from 'mobx-react';
import { FlightsApp } from './containers/FlightsApp';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { FlightDetails } from './components/FlightDetails';
import { appState } from './state/AppState';
import { bookFlight } from './services/book';
import { CreateBooking } from './components/CreateBooking';

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

function App() {
	const LoggedIn = localStorage.getItem('token') ? true : false;
	return (
	<div>
		<Provider appState={appState}>
			<Router>
				<PrivateRoute isLoggedIn={LoggedIn} path={`/flights/:id`} Component={FlightDetails} />
				<Route exact path="/" component={FlightsApp} />
				<Route path="/login" component={Login}/>
				<Route path="/register" component={Register} />
				<Route path="/flights/:id/book" render={(props) => <CreateBooking {...props} createBooking={createBooking} />} />
			</Router>
		</Provider>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
