import { observable, decorate, computed, autorun } from 'mobx';

class AppState {
  flights = [];
  bookings = [];
  username = "";
  userId = localStorage.getItem('userId');
  flightsFilter = localStorage.getItem('flightsFilter') || '';
  get filteredFlights() {
    return this.flights.filter((flight) =>
      flight.name.toLowerCase().includes(this.flightsFilter.toLowerCase()),
    );
  };
  token = localStorage.getItem('token') || '';
  get isLoggedIn() {
  	return Boolean(this.token);
  }
}
decorate(AppState, {
  bookings: observable,
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