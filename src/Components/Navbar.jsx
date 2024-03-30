import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>{' '}
        {/* Wrap Link around list items */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
       
      </ul>
    </nav>
  );
}