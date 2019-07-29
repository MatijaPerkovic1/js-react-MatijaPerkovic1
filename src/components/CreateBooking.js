import React from 'react';
import { observer } from 'mobx-react';
import styles from './CreateBooking.module.css';
import { Redirect } from 'react-router-dom';

function CreateBookingComponent(props) {

	const [noOfSeats, setNoOfSeats] = React.useState(1);
	function handleSelectChange(e){
		setNoOfSeats(e.target.value);
	}
	function handleConfirmClick() {
		props.createBooking(props, noOfSeats, props.match.params.id);
	}
	return(
		<div id={styles.bookingContainer}>
			<div id={styles.bookingContent}>
				<h2 id={styles.bookingTitle}>Create booking</h2>
				<p id={styles.noOfPassengersText}>Number of passengers</p>
				<select onChange={handleSelectChange}>
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