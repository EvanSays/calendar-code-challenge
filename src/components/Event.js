import React from 'react';
import './Event.css'

const Event = ( {name} ) => {
  
  return (
    <div className='event-wrapper'>
      <p className='event-name'>{name}</p>
    </div>
  )
}

export default Event;