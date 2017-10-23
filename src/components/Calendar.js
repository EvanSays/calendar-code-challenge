import React, { Component } from 'react';
import Header from './Header';
import DaysInMonth from './DaysInMonth'
import './Calendar.css';

class Calendar extends Component {
  render() {
    return (
      <div className='calendar-wrapper'>
        <Header />
        <DaysInMonth />
      </div>
    );
  }
}

export default Calendar;