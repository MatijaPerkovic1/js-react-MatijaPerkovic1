import React from 'react';
import { observer } from 'mobx-react';
import styles from './CreateBooking.module.css';
import globalStyles from './GlobalStyles.module.css';
import { Redirect } from 'react-router-dom';
import { bookFlight } from '../services/book';

function CreateBookingComponent(props) {

	const [noOfSeats, setNoOfSeats] = React.useState(1);
	function handleSelectChange(e){
		setNoOfSeats(e.target.value);
	}
	function handleConfirmClick() {
		props.history.push('/');
		bookFlight(noOfSeats, props.match.params.id);
	}
	function closeBooking(e){
  		if(e.target.id == styles.bookingContainer){
  			props.history.push('/flights/' + props.match.params.id);
  		}
  	}
	return(
		<div id={styles.bookingContainer} onClick={closeBooking}>
			<div id={styles.bookingContent}>
				<h2 id={styles.bookingTitle} className={globalStyles.blueHeading}>Create booking</h2>
				<p id={styles.noOfPassengersText}>Number of passengers</p>
				<select onChange={handleSelectChange}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
				</select><br />
				<button id={styles.confirmButton} class={globalStyles.button} onClick={handleConfirmClick}>
					Confirm booking
				</button>
			</div>
		</div>
	)

}

export const CreateBooking = observer(CreateBookingComponent);