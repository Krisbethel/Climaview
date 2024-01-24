// Navbar.js
import React from 'react';
import './Navbar.css';
import { FaCloudSun } from 'react-icons/fa';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-content">
      <div className="navbar-logo">
        <FaCloudSun size={32} />
        <h1>ClimaView</h1>
      </div>
      
    </div>
  </div>
);

export default Navbar;
