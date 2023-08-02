import React from 'react';
import './navbar.css';
import NavbarLogo from '../navbar-logo/navbar-logo';

function Navbar() {
    return (
      <nav className="navbar">
        <NavbarLogo/>
        <ul className="navbar-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    );
  };

  export default Navbar;