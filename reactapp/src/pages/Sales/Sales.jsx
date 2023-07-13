



import React, { useEffect, useState } from 'react'

import { Link, NavLink, useParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const Sales = () => {
  const options = [1,2,3,4,5];

  return (
    <>
      <div className='title'>Sales</div>
      <div className='search'>
        <SearchBar options={options}/>
        <NavLink to={"./createSale"} className='nav-link'><button className='create-button'>Create Sale</button></NavLink>
      </div>
      <hr/>
    </>
  )
}
export default Sales;
