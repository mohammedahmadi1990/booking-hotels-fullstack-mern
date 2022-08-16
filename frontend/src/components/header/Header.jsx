import { faBed, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import "./header.css"
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';

function Header() {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  return (
    <div className='header'>
      <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faCar} />
          <span>Car rentals</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="headerListItem">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Airport taxis</span>
        </div>
        </div>
        <h1 className="headerTitle">Find your next stay</h1>
        <p className="headerDesc">Search deals on hotels, homes, and much more...</p>
        <button className='headerBtn'>SignIn / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} />
            <input type="text" placeholder='Where are you going?' className='headerSearchInput'/>
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span className='headerSearchText'>date to date</span>
            <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon' />
            <span className='headerSearchText'>2 adults 2 children 1 room</span>
          </div>
          <div className="headerSearchItem">
           <button className='headerBtn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header