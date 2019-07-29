import { get } from './flighterApiGet';
export function getUser(id) {
  return get(`users/${id}`)
    .then((response) => response.user)
}