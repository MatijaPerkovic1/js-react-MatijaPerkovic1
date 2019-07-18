import { get } from './flighterApi';

export function registerUser(email, fullName, password) {
	const options = {
		method: 'POST',
        headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'  
        },
        body: JSON.stringify({
        	"user": {
        		"email": email,
        		"first_name": fullName.split(" ")[0],
        		"last_name": fullName.split(" ")[1],
        		"password": password
        	}
        })
    };
  	return get('users', options)
    .then((res) => {
    	if(res.errors) alert(JSON.stringify(res.errors))
    });
}