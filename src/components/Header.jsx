import React from "react";
import "./Header.css";
import { FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">DS MAX</div>
      </div>
      <div className="header-right">
        <input
          type="text"
          placeholder="Search properties..."
          className="search-bar"
        />
        <div className="info">
          <span className="text">Our Projects</span>
          <span className="text">Pay Online</span>
        </div>
        <a href="#" aria-label="phone" className="phone-icon">
          <FaPhone />
        </a>
      </div>
    </header>
  );
};

export default Header;
