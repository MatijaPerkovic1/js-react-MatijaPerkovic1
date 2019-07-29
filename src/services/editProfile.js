import { put } from './fligherApiPost.js';
import { appState } from '../state/AppState';

export function editProfile(userId, email, fullName, password, imageUrl) {
    const body = JSON.stringify({
        	"user": {
        		"email": email,
                "first_name": fullName.split(" ")[0],
                "last_name": fullName.split(" ")[1],
        		"password": password,
                "image_url": imageUrl
        	}
        })
  	return put(`users/${userId}`, body)
    .then((res) => {
    	res.errors ? alert(JSON.stringify(res.errors)) : (appState.username = res.user.first_name);
    });
}