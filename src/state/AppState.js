import { observable, decorate, computed, autorun } from 'mobx';

class AppState {
  flights = [];
  bookings = [];
  username = "";
  userId = localStorage.getItem('userId');
  flightsFilter = localStorage.getItem('flightsFilter') || '';
  numberOfPassengers = 0;
  flightDate = null;
  get filteredFlights() {
    return this.flights.filter((flight) =>
      flight.name.toLowerCase().includes(this.flightsFilter.toLowerCase())
    ).filter((flight) => 
        (flight.no_of_seats - flight.no_of_booked_seats) >= this.numberOfPassengers
    ).filter((flight) => {
        if(this.flightDate) {
          return this.flightDate == flight.flys_at.split('T')[0]
        } else {
          return flight
        }
    }
    )
  };
  token = localStorage.getItem('token') || '';
  get isLoggedIn() {
  	return Boolean(this.token);
  }
}
decorate(AppState, {
  bookings: observable,
  flightDate: observable,
  numberOfPassengers: observable,
  username: observable,
  flights: observable,
  userId: observable,
  flightsFilter: observable,
  token: observable,
  filteredFlights: computed,
  isLoggedIn: computed
});

export const appState = new AppState();

autorun(() => {
  localStorage.setItem('flightsFilter', appState.flightsFilter);
});