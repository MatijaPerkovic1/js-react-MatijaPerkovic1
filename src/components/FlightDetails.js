import React from 'react';
import { getFlight } from '../services/getFlight';
import { useAsync } from 'react-use';
import styles from './FlightDetails.module.css';
import { Navbar } from '../components/Navbar';
import { observer } from 'mobx-react';


function FlightDetailsComponent(props) {

	function CreateBooking(){
		props.history.push(`/flights/${props.match.params.id}/book`);
	}

	const {value: flight} = useAsync(getFlight.bind(null, props.match.params.id));

	return(
		<div id={styles.details}>
			<Navbar />
			<div id={styles.info}>
				<h2 className={styles.title}>{flight && flight.name}</h2>
				<div>
					<p>Company:</p>
					<p>{flight && flight.company_name}</p>
					<p>Departs at:</p>
					<p>{flight && new Date(flight.flys_at).toDateString()}</p>
					<p>Base price:</p>
					<p>{flight && flight.base_price}$</p>
				</div>
				<div>
					<p>Available seats:</p>
					<p>{flight && flight.no_of_seats - flight.no_of_booked_seats}</p>
					<p>Lands at:</p>
					<p>{flight && new Date(flight.lands_at).toDateString()}</p>
					<p>Current price:</p>
					<p>{flight && flight.current_price}$</p>
				</div>
				<button id={styles.detailsButton} onClick={CreateBooking}>
						Book now
				</button>
			</div>
			<div id={styles.imgInfo}>
				<img src="https://news.gtp.gr/wp-content/uploads/2019/04/Croatia-Airlines.jpg" />
				<div id={styles.amenities}>
					<div>
						<i class="fa fa-wifi"><p>Wireless internet</p></i>
						<i class="fas fa-baby-carriage"><p>Kids friendly</p></i>
					</div>
					<div>
						<i class="fa fa-tv"><p>TV available</p></i>
						<i class="fas fa-concierge-bell"><p>Meal included</p></i>
					</div>
				</div>
			</div>
		</div>
	)
}
export const FlightDetails = observer(FlightDetailsComponent);