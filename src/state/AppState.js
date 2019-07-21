import { observable, decorate, computed, autorun } from 'mobx';

class AppState {
  flights = [];
  get isLoggedIn() {
  	return Boolean(localStorage.getItem('token'));
  }
}

decorate(AppState, {
  flights: observable,
  isLoggedIn: computed
});

export const appState = new AppState();