import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'

const Leads = () => {
    const options=[1,2,3,4,5]
    return (
    <div>
        <div className='title'>Leads</div>
        <div className='search'>
            <SearchBar options={options}/>
            <NavLink to={"./createLead"} className='nav-link'><button className='create-button'>Create Lead</button></NavLink>
        </div>
        <hr/>
    </div>
    )
}

export default Leads