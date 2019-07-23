import { observable, decorate, computed, autorun } from 'mobx';

class AppState {
  flights = [];
  token = localStorage.getItem('token') || '';
  get isLoggedIn() {
  	return Boolean(this.token);
  }
}
decorate(AppState, {
  flights: observable,
  token: observable,
  isLoggedIn: computed
});
export const appState = new AppState();
