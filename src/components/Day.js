import React from 'react';
import Events from './Events';
import './Day.css';
import { eventArray } from '../constants/constants';

const Day = ({ date }) => {
  // console.log('date', date.format('MMMM Do YYYY'));
  

  return (
    <div className='day'>
      <div className='day-date-wrapper'>
        <span>{date.format('D')}</span>
      </div>
      <Events />
    </div>
  )
}

export default Day;