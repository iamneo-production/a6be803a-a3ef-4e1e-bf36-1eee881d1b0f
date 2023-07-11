import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'

const Opportunities = () => {
  const options = [1,2,3,4,5];

  return (
    <>
    <div className='title'>Opportunities</div>
      <div className='search'>
        <SearchBar options={options}/>
        <NavLink to={"./createOpportunity"} className='nav-link'><button className='create-button'>Create Opportunity</button></NavLink>
      </div>
      <hr/>
    </>
  )
}

export default Opportunities