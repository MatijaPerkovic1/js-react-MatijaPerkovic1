import React from 'react';
import { getUser } from '../services/getUser';
import { getBookings } from '../services/bookings';
import { AppContext } from '../state/AppContext';
import { Route } from 'react-router-dom';
import { useAsync } from 'react-use';
import styles from './Profile.module.css';
import globalStyles from './GlobalStyles.module.css';
import { Navbar } from '../components/Navbar';
import { observer } from 'mobx-react';
import { Booking } from '../components/Booking.js';

function ProfileContainer(props) {
	const { appState } = React.useContext(AppContext);

	const {value: user, loading} = useAsync(getUser.bind(null, appState.userId), [appState.username]);
	useAsync(getBookings.bind(null, appState));

	const [currentBookingsPage, setCurrentBookingPage] = React.useState(0);
	const [displayedBookings, setDisplayedBookings] = React.useState([]);
	React.useEffect(() => {
		setDisplayedBookings(appState.bookings.slice(0, 4));
	}, [appState.bookings]);

	function editProfile(){
		props.history.push(`/myprofile/edit`);
	}
	function onLogOut(props) {
		localStorage.removeItem('token');
		appState.token = '';
		appState.flights = [];
		props.history.push('/');
	}
	//x is -1 for previous, +1 for next
	function changeDisplayedBookings(x) {
		setCurrentBookingPage(currentBookingsPage + x);
		const firstBooking = (currentBookingsPage + x) * 4;
		const lastBooking = firstBooking + 4;
		setDisplayedBookings(appState.bookings.slice(firstBooking, lastBooking));
	}

	return(
		<React.Fragment>
			<Route path="/"  render={(props) => <Navbar {...props} onLogOut={onLogOut} />}/>
			{!user ? <p>Loading...</p> :
			<div id={styles.profilePage}>
				<div id={styles.content}>
					<div id={styles.editProfile}>
						<img src={user.image_url} alt="Profile Picture" id={styles.profileImage}/>
						<h2 id={styles.userName} className={globalStyles.blueHeading}>{user.first_name} {user.last_name}</h2>
						<p>{user.email}</p>
						<button id={styles.editButton} className={globalStyles.button} onClick={editProfile}>Edit</button>
					</div>
					<div className={styles.components}>
						<p className={`${globalStyles.neutralHeading} ${styles.componentsHeading}`}>MY BOOKINGS</p>
						<div className={styles.componentList}>
						{currentBookingsPage !== 0 && <i className={`fas fa-chevron-left ${styles.arrowIcons}`} onClick={() => changeDisplayedBookings(-1)}></i>}
						{displayedBookings.map((booking) => (
	        				<Booking booking={booking.flight} />
	     				 ))}
						{(appState.bookings.length >= (currentBookingsPage+1) * 4) &&<i className={`fas fa-chevron-right ${styles.arrowIcons}`} id={styles.rightArrow} onClick={() => changeDisplayedBookings(1)}></i>}
						</div>
					</div>
					<div className={styles.components}>
						<p className={`${globalStyles.neutralHeading} ${styles.componentsHeading}`}>WISHLIST</p>
						<div className={styles.componentList}>
						{displayedBookings.map((booking) => (
	        				<Booking booking={booking.flight} />
	     				 ))}
						</div>
					</div>
				</div>
			</div>
			}
		</React.Fragment>
	)
}
export const Profile = observer(ProfileContainer);