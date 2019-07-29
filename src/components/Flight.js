import React, { useState} from 'react';
import { useLocalStorage } from 'react-use';
import styles from '../containers/FlightsApp.module.css';
import { Link } from 'react-router-dom';
import { FlightDetails } from '../containers/FlightDetails';
import { observer } from 'mobx-react';

function FlightComponent(props) {
	
	const flysAtDate = React.useMemo(() => 
	{
		const flysAtDate = new Date(props.flight.flys_at)
		return `${flysAtDate.getHours()}:${flysAtDate.getMinutes()}`;
	}, 
	[]);

	return(
	<Link className={styles.linkStyle} to={`/flights/${props.flight.id}`} >
		<div className={styles.item}>
			<img src="https://news.gtp.gr/wp-content/uploads/2019/04/Croatia-Airlines.jpg" />
			<div id={styles.itemInfo}>
			<p><b>Departs at {flysAtDate}</b></p>
			<p>{props.flight.name}</p>
			<div>
				<span className='fa fa-star checked'></span>
				<span className='fa fa-star checked'></span>
				<span className='fa fa-star checked'></span>
			</div>
			<pre id={styles.tickets}>|  {props.flight.no_of_seats - props.flight.no_of_booked_seats} tickets available</pre>
			<pre>Price  <span id={styles.price}>{props.flight.current_price}$</span></pre>
			</div>
		</div>
	</Link>
	)
	
}

export const Flight = observer(FlightComponent);