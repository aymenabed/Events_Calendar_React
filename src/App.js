import React from 'react';
import Calendar from './components/Calendar/Calendar';
import events from '../src/utils/events.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calendar events={events} />
    </div>
  );
}

export default App;
