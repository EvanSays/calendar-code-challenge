import Event from './Event';
import './Day.css';
import React, { Component } from 'react';

class Day extends Component {
  constructor(props) {
    super(props);
   this.state = {

   }
   this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  
  }

  render() {
    const { date, events } = this.props;

    const event = events.map((event, i) => {
      if (date.format('MMMM Do YYYY') === event.date.format('MMMM Do YYYY')) {
        return <Event key={i.toString()} name={event.name} />
      } else {
        return null
      }
    })
    
    return (
      <div className='day' onClick={this.handleClick}>
        <div className='day-date-wrapper'>
          <span>{date.format('D')}</span>
        </div>
        {event}
      </div>
    )
  }
}

export default Day;