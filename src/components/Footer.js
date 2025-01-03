import React from 'react';
import '../styles/Footer.css';
import { Twitter, Facebook, Instagram, Github } from 'lucide-react';
import logo from '../assets/icon.png'
import NewsLetterDialog from '../pages/NewsLetterDialog';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Logo Section */}
          <div className="footer-section brand-section">
            <h2 className="logo">FIFTH</h2>
            <div className="logo-icon">
              <img src={logo} />
            </div>
            <div className="social-icons">
              <a href="#"><Twitter /></a>
              <a href="#"><Facebook /></a>
              <a href="#"><Instagram /></a>
              <a href="#"><Github /></a>
            </div>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-section">
            <h3>HELP</h3>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="footer-section">
            <h3>FAQ</h3>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3>RESOURCES</h3>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to - Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
