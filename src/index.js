import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import React from 'react';
import { appState } from './state/AppState';
import { Provider } from 'mobx-react';

import { FlightsApp } from './containers/FlightsApp';
import { Login } from './containers/Login';
import { Register } from './containers/Register';
import { FlightDetails } from './containers/FlightDetails';
import { CreateBooking } from './containers/CreateBooking';
import { Profile } from './containers/Profile';
import { EditProfile } from './containers/EditProfile';

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
		<Provider appState={appState}>
			<Router>
				<PrivateRoute isLoggedIn={LoggedIn} path={`/flights/:id`} Component={FlightDetails} />
				<PrivateRoute isLoggedIn={LoggedIn} path={`/myprofile`} Component={Profile} />
				<Route path="/myprofile/edit" component={EditProfile} />
				<Route exact path="/" component={FlightsApp} />
				<Route path="/flights/:id/book" component={CreateBooking} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
			</Router>
		</Provider>
	</div>
	);
}

ReactDOM.render(<App />, document.getElementById('root'));
