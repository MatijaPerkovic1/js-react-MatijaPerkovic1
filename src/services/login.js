import { post } from './fligherApiPost.js';
import { appState } from '../state/AppState';
export function loginUser(username, password) {
	const body = JSON.stringify({
	        "session": {
	        	"email": username,
	        	"password": password
	        }
	})
  return post('session', body)
  	.then((response) => {
  		if(response.session) {
			  localStorage.setItem('token', response.session.token);
			  localStorage.setItem('userId', response.session.user.id);
			  appState.userId = response.session.user.id;
			  appState.token = response.session.token;
  		} else {
  			alert(JSON.stringify(response.errors))
  		}
  		
  	});
}