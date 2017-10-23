import React, { Component } from 'react';
import Day from './Day';
import './DaysInMonth.css';
import moment from 'moment';
import { eventArray } from '../constants/constants';

class DaysInMonth extends Component {
  constructor() {
    super();
    this.state = {
      enumeratedDates: null,
      events: null,
    }
    this.datesBetween = this.datesBetween.bind(this);
  }

  componentDidMount() {
    const october = moment(new Date('10/1/2017'));
    const november = moment(new Date('11/30/2017'));

    this.setState({
      enumeratedDates: this.datesBetween(october, november),
      events: eventArray,
    })
   
  }

  datesBetween(startDate, endDate) {
      let now = startDate.clone(), dates = [];
      while (now.isBefore(endDate) || now.isSame(endDate)) {
        dates.push(now.clone());
        now.add(1, 'd');
      }
    return dates;
  }

  render() {
    const { enumeratedDates, events } = this.state;
    let day;
    if (enumeratedDates) {
      day = enumeratedDates.map(date => {
        for (let i = 0; i < events.length; i++) {
          // console.log('eventArray[i]', events[i]);
          // console.log('date.format', date.format('MMMM Do YYYY') );
          // console.log('events[i].startDate', events[i].start_date);
          
          if (date.format('MMMM Do YYYY') === events[i].start_date) {
            console.log(date.format('MMMM Do YYYY'));
            
          }
        }
        return <Day date={date}/>
      })
    }
    
    return (
      <div className='days-wrapper'>
        <div className='stripe-left'></div>
          {day}
        <div className='stripe-right'></div>
      </div>
    );
  }
}

export default DaysInMonth;