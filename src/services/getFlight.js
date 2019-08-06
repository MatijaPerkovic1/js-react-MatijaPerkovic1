import { get } from './flighterApi';
export function getFlight(id) {
  return get(`flights/${id}`)
    .then((response) => response.flight)
}