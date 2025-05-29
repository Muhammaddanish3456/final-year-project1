// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <h1>College Property Management</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/viewproperties">Properties</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/addnewproperty">Addnewproperty</Link></li>
        <li><Link to="/propertydetails">PropertyDetails</Link></li>

      </ul>
    </nav>
  </header>
);

export default Navbar;
