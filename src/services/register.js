import { post } from './fligherApiPost.js';

export function registerUser(email, fullName, password) {

    const body = JSON.stringify({
        	"user": {
        		"email": email,
        		"first_name": fullName.split(" ")[0],
        		"last_name": fullName.split(" ")[1],
        		"password": password
        	}
        })
  	return post('users', body)
    .then((res) => {
    	if(res.errors) alert(JSON.stringify(res.errors))
    });
}