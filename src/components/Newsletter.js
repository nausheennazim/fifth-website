import React, { useState } from "react";
import "../styles/Newsletter.css";
import newsBanner from "../assets/home-banner-3.png"
import NewsletterSubscription from "./NewsLetterSubscription";
import ImageGrid from "./ImageGrid";

const Newsletter = ({ openNewsletterDialog }) => {
  return (
    <div className="news-container" >
      <img src={newsBanner} />
      <div className="news-content">
        <div className="image-grid">
          <ImageGrid />
        </div>
        <div className="news-letter">
          <NewsletterSubscription openNewsletterDialog={openNewsletterDialog} />
        </div>
      </div>
    </div>

  );
};

export default Newsletter;
