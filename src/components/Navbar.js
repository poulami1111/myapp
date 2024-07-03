
// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // Optional: for adding custom styles

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="navbar-brand">
        <a href="/">my App</a>
      </div>
      <ul className="navbar-nav" style={{ display:'flex',flexDirection: 'row',color:'whitesmoke' }}>
        <li className="nav-item">
          <a className="nav-link" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;