import React from 'react';
import { observer } from 'mobx-react';
import styles from './Booking.module.css';

function BookingComponent({booking}) {
	
	const flysAtDate = React.useMemo(() => 
	{
		let flysAtDate = new Date(booking.flys_at)
		return `${flysAtDate.getHours()}:${flysAtDate.getMinutes()}`;
	}, 
	[]);

	return(
		<div id={styles.bookingItem}>
			<img src="https://news.gtp.gr/wp-content/uploads/2019/04/Croatia-Airlines.jpg" id={styles.bookingImage}/>
			<div id={styles.bookingItemInfo}>
				<p><b>{booking.name}</b></p>
				<p>{flysAtDate}</p>
			</div>
		</div>
	)
	
}

export const Booking = observer(BookingComponent);