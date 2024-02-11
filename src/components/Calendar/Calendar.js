import React, { useState, useEffect } from 'react';
import Event from '../Event/Event';
import calculateLayout from '../../utils/calendarUtils';
import './Calendar.css';

const Calendar = ({ events }) => {
  const [eventLayouts, setEventLayouts] = useState([]);

  useEffect(() => {
    setEventLayouts(calculateLayout(events));
  }, [events]);

  return (
    <div className="calendar-container">
      {eventLayouts.map(event => <Event key={event.id} {...event} />)}
    </div>
  );
}

export default Calendar;
