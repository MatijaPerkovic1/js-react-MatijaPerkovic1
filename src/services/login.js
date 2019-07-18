import { get } from './flighterApi';
import { appState } from '../state/AppState';
export function loginUser(username, password) {
	const options = {
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
	}
  	return get('session', options)
  	.then((response) => {
  		if(response.session) {
  			localStorage.setItem('token', response.session.token);
  			appState.isLoggedIn = true;
  		} else {
  			alert(JSON.stringify(response.errors))
  		}
  		
  	});
}