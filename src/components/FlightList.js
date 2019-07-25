import React from 'react';
import { observer } from 'mobx-react';
import { Flight } from './Flight';

function FlightListComponent({flights}) {
  return (
    <React.Fragment>
      {flights.map((flight) => (
        <Flight flight={flight} key={flight.id} />
      ))}
    </React.Fragment>
  );
}

export const FlightList = observer(FlightListComponent);