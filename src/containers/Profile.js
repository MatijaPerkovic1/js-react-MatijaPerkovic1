import React from 'react';
import { getUser } from '../services/getUser';
import { getBookings } from '../services/bookings';
import { AppContext } from '../state/AppContext';
import { Route } from 'react-router-dom';
import { useAsync } from 'react-use';
import styles from './Profile.module.css';
import { Navbar } from '../components/Navbar';
import { observer } from 'mobx-react';
import { Booking } from '../components/Booking.js';


function ProfileContainer(props) {
	const { appState } = React.useContext(AppContext);

	const {value: user, loading} = useAsync(getUser.bind(null, appState.userId), [appState.username]);
	useAsync(getBookings.bind(null, appState));
	function editProfile(){
		props.history.push(`/myprofile/edit`);
	}
	function onLogOut(props) {
		localStorage.removeItem('token');
		appState.token = '';
		appState.flights = [];
		props.history.push('/');
	}

	return(
		<React.Fragment>
			<Route path="/"  render={(props) => <Navbar {...props} onLogOut={onLogOut} />}/>
			{!user ? <p>Loading...</p> :
			<div id={styles.profilePage}>
				<div id={styles.editProfile}>
					<img src={user.image_url} alt="Profile Picture" id={styles.profileImage}/>
					<h2 id={styles.userName}>{user.first_name} {user.last_name}</h2>
					<p>{user.email}</p>
					<button id={styles.editButton} onClick={editProfile}>Edit</button>
				</div>
				<div className={styles.components}>
					<p className={styles.neutralHeading}>MY BOOKINGS</p>
					<div className={styles.componentList}>
					{appState.bookings.slice(5, 9).map((booking) => (
        				<Booking booking={booking.flight} />
     				 ))}
					</div>
				</div>
				<div className={styles.components}>
					<p className={styles.neutralHeading}>WISHLIST</p>
					<div className={styles.componentList}>
					{appState.bookings.slice(0, 4).map((booking) => (
        				<Booking booking={booking.flight} />
     				 ))}
					</div>
				</div>
			</div>
			}
		</React.Fragment>
	)
}
export const Profile = observer(ProfileContainer);