import React from "react";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection"
import Newsletter from "../components/Newsletter"
import { arrivals, top } from "../data";


function HomePage({ openNewsletterDialog }) {
  return (
    <>
      <HeroSection />
      <ProductSection arrivals={arrivals} top={top} />
      <Newsletter openNewsletterDialog={openNewsletterDialog} />
    </>
  )
}

export default HomePage;
