import React from "react";
import "../styles/ProductSection.css";
import banner2 from '../assets/home-banner-2.png'
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

const ProductSection = ({ arrivals, top }) => {
  const navigate = useNavigate();

  const moveToPage = () => {
    navigate('/newArrivals')
  }

  return (
    <section className="product-section">
      <img src={banner2} />
      <div className="product-content">
        <div className="products-div">
          <h1 class="product-type">NEW ARRIVALS</h1>
          {arrivals.map((product) => (
            <ProductCard name={product.name} rating={product.rating} price={product.price} img={product.img} />
          ))}
          <button className="view-button" onClick={moveToPage}> View All</button>
        </div>
        <div className="products-div">
          <h1 class="product-type">TOP SELLING</h1>
          {top.map((product) => (
            <ProductCard name={product.name} rating={product.rating} price={product.price} img={product.img} />))}
          <button className="view-button" onClick={moveToPage}>View All</button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
