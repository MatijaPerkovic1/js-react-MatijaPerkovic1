import React from 'react';
import { observer } from 'mobx-react';
import styles from './CreateBooking.module.css';
import { bookFlight } from '../services/book';
import { Redirect } from 'react-router-dom';

function CreateBookingComponent(props) {

	const [redirect, setRedirect] = React.useState(false);

	function handleConfirmClick() {
		const selectElement = document.querySelector('select');
		const noOfSeats = selectElement.options[selectElement.selectedIndex].value;
		bookFlight(noOfSeats, props.match.params.id);
		setRedirect(true);
	}
	return(
		<div id={styles.bookingContainer}>
			{redirect && <Redirect to="/" />}
			<div id={styles.bookingContent}>
				<h2 id={styles.bookingTitle}>Create booking</h2>
				<p id={styles.noOfPassengersText}>Number of passengers</p>
				<select>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
				</select><br />
				<button id={styles.confirmButton} onClick={handleConfirmClick}>
					Confirm booking
				</button>
			</div>
		</div>
	)

}

export const CreateBooking = observer(CreateBookingComponent);