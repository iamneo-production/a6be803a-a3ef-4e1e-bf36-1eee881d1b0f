import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ name, searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">{name} DASHBOARD</a>
        <form className="form-inline">
          <div className="input-group">
            <input
              className="form-control"
              type="search"
              placeholder="Type here to search"
              aria-label="Search"
              value={searchQuery}
              onChange={onSearchChange}
              style={{ width: '444px', marginRight: '5px' }}
            />
            {/* <div className="input-group-append">
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={onSearchSubmit}
              >
                Search
              </button>
            </div> */}
            <div className="input-group-append" style={{ marginLeft: '5px' }}>
              <button className="btn btn-outline-primary" type="button">
                <FontAwesomeIcon icon={faBell} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;