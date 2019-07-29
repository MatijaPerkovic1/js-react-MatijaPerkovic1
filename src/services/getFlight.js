import { get } from './flighterApiGet';
export function getFlight(id) {
  return get(`flights/${id}`)
    .then((response) => response.flight)
}