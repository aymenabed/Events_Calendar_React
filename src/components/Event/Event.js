import React from 'react';
import './Event.css';

const Event = ({ id, top, height, left, width }) => {

  const style = {
    top: `${top}px`,
    left: `${left}%`,
    height: `${height}px`,
    width: `${width}%`,
  };

  return (
    <div className="event" style={style}>
      {id}
    </div>
  );
};

export default Event;
