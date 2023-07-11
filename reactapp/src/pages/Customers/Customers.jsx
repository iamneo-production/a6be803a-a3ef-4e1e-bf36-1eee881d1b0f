import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar';
import { NavLink } from 'react-router-dom';

const Customers = () => {
  const options = [1,2,3,4,5];
  return(
    <>
      <div className='title'>Customers</div>
      <div className='search'>
        <SearchBar options={options}/>
        <NavLink to={"./createCustomer"} className='nav-link'><button className='create-button'>Create a Customer</button></NavLink>
      </div>
      <hr/>
    </>
  );
  
};

export default Customers