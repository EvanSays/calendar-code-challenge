import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='month-wrapper'>
        <span className="month">October</span>
        <span className="year">2017</span>
      </div>
      <div className='week-wrapper'>
        <span>Sun</span>
        <span>Mon</span>
        <span>Tues</span>
        <span>Weds</span>
        <span>Thur</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  )
}

export default Header;