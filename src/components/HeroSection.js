import React from "react";
import "../styles/HeroSection.css";
import homeBanner from "../assets/home-banner.png"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-container" >
      <img src={homeBanner} />
      <button type="button">
        <Link to="/newArrivals">Shop Now</Link>
      </button>
      <div className="hero-content">
        <h1>FIND CLOTHES</h1>
        <h1>THAT MATCH</h1>
        <h1>YOUR STYLE</h1>
      </div>
    </div>
  );
};

export default HeroSection;
