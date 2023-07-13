import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import '../DashboardStyle/Style.css'

const Tickets = () => {

  const options = [1,2,3,4,5];

  return (
    <>
      <div className='title'>Tickets</div>
      <div className='search'>
        <SearchBar options={options} />
        <NavLink to={"./createTicket"}><button className='create-button'>Create Ticket</button></NavLink>
      </div>
      <hr/>
    </>
  )
}

export default Tickets