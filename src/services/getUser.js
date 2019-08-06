import { get } from './flighterApi';
export function getUser(id) {
  return get(`users/${id}`)
    .then((response) => response.user)
}