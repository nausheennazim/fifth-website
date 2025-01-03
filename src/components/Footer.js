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
              <a ><Twitter /></a>
              <a ><Facebook /></a>
              <a ><Instagram /></a>
              <a ><Github /></a>
            </div>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3>COMPANY</h3>
            <ul>
              <li><a >About</a></li>
              <li><a >Features</a></li>
              <li><a >Works</a></li>
              <li><a >Career</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="footer-section">
            <h3>HELP</h3>
            <ul>
              <li><a >Customer Support</a></li>
              <li><a >Delivery Details</a></li>
              <li><a >Terms & Conditions</a></li>
              <li><a >Privacy Policy</a></li>
            </ul>
          </div>

          {/* FAQ Section */}
          <div className="footer-section">
            <h3>FAQ</h3>
            <ul>
              <li><a >Account</a></li>
              <li><a >Manage Deliveries</a></li>
              <li><a >Orders</a></li>
              <li><a >Payments</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3>RESOURCES</h3>
            <ul>
              <li><a >Free eBooks</a></li>
              <li><a >Development Tutorial</a></li>
              <li><a >How to - Blog</a></li>
              <li><a >Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
