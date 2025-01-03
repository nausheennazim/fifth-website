import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import icon from '../assets/icon.png'
import SignUpDialog from '../pages/SignUpDialog'

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="header" style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
      }}>
        <div className="logo">
          <img
            src={icon}
            alt="Logo"
            className="logo-image"
            onClick={() => { window.location.href = '/' }}
          />
        </div>

        <ul className="nav-links">
          <li className="nav-item">
            Shop
            <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "5px" }} />
          </li>
          <li className="nav-item">On Sale</li>
          <li className="nav-item" onClick={() => {
            window.location.href = '/newArrivals'
          }}>New Arrivals</li>
          <li className="nav-item">Brands</li>
        </ul>

        {/* Search Bar */}
        <div className="search-bar">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
          />
        </div>

        <div className="icons">
          <FontAwesomeIcon icon={faShoppingCart} onClick={() => {
            window.location.href = '/cart'
          }} />
          <FontAwesomeIcon icon={faUser} onClick={() => {
            setIsDialogOpen(true);
          }} />
        </div>
      </div>
      {isDialogOpen && <SignUpDialog onClose={() => { setIsDialogOpen(false) }} />}
    </>
  );
};

export default Header;
