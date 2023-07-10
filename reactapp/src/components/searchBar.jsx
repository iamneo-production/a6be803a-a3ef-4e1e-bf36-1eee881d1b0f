import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css'

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.search(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <select ref={props.refer} onChange={props.onChange} className='filter-button'>
          {props.options.map(option=><option value={option}>{option}</option>)}
        </select>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <FaSearch/>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;