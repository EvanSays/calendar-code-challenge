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
    })
   
    let userDates = eventArray.map(event => {
      let datesNamesArray = [];
      let dateBetweenArray = this.datesBetween(moment(new Date(event.start_date)), moment(new Date(event.end_date)));
      dateBetweenArray.forEach(date => {
        datesNamesArray.push({ name: event.event_name, date: date})
      })
      return datesNamesArray
    })

    let dates = [].concat.apply([], userDates);

    this.setState({
      events: dates,
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
      day = enumeratedDates.map((date, i) => {
      
        return <Day key={i.toString()} date={date} events={events}/>
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