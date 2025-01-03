import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/NewsLetterSubscription.css'

const NewsletterSubscription = ({ openNewsletterDialog }) => {
  return (
    <>
      <div className="newsletter-container">
        <h2 className="newsletter-title">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>

        <form className="newsletter-form">
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faEnvelope} className="email-icon" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="email-input"
            />
          </div>

          <button type="button" onClick={() => { openNewsletterDialog() }} className="subscribe-button">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </>
  );
};

export default NewsletterSubscription;
