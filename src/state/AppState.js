import { observable, decorate } from 'mobx';

class AppState {
  flights = [];
  isLoggedIn = false
}

decorate(AppState, {
  flights: observable,
  isLoggedIn: observable
});

export const appState = new AppState();
