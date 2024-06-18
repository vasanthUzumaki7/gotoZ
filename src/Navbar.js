// src/components/Navbar.js
import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">GoToZ</div>
      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <div className="navbar-item-title" style={{fontSize:"18px"}}>Solutions</div>
          <div className="dropdown-content">
            <a href="#">3D Files Upload</a>
            <a href="#">Object Capture</a>
            <a href="#">Ar Logo</a>
            <a href="#">Ar Face</a>
            <a href="#">Ar Portal</a>
            <a href="#">Ar Text</a>
            <a href="#">Ar Video</a>
            <a href="#">AI Code</a>
            <a href="#">Ar Data Api</a>
          </div>
        </li>

        <li><a href="#about">Pricing</a></li>
        <li><a href="#services">Blog</a></li>
        <li><a href="#contact">Faq</a></li>
        <li><a href="#contact">Login</a></li>
        <button>Get Started</button>
      </ul>
    </nav>
  );
};

export default Navbar;
