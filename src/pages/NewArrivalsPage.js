import React, { useState } from "react";
import '../styles/NewArrivalsPage.css'
import NewsletterSubscription from "../components/NewsLetterSubscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { newArrivals } from "../data";
import ProductCard from "../components/ProductCard";
import FilterDialog from "./FilterDialog";

const NewArrivalsPage = ({ openNewsletterDialog }) => {
  const [showFilter, setShowFilters] = useState(false)

  return (
    <>
      <div className="arv-page">
        <div className="arv-header">
          <nav className="breadcrumb">
            <span>Home</span>
            <span className="separator">&gt;</span>
            <span>New Arrivals</span>
          </nav>
          <div className="title-row">
            <h1>NEW ARRIVALS</h1>
            <span>Showing 1-10 of 100 Products  |  Sort by:
              <a style={{
                marginLeft: "5px",
                marginRight: "10px"
              }} >Most Popular
                <FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: "5px" }} />
              </a>
              |
              <a onClick={() => { setShowFilters(true) }}
                style={{
                  marginLeft: "10px",
                  fontWeight: "bold",
                  textDecoration: "underline"
                }} >
                Filters
              </a>
            </span>
          </div>
        </div>

        <div className="arv-content">

          <div className="arv-items">
            {newArrivals.map((product) => {
              return <ProductCard name={product.name} rating={product.rating} price={product.price} img={product.img} isTransparent={true} />
            })}
          </div>

          <hr />
          <div className="arv-pages">
            <button className="page-move-btn">
              <FontAwesomeIcon icon={faArrowLeft} />
              Previous
            </button>
            <div className="pagination-container">
              <button className={`page-button active`}>1</button>
              <button className={`page-button`}>2</button>
              <button className={`page-button`}>3</button>
              <button className={`page-button`}>...</button>
              <button className={`page-button`}>8</button>
              <button className={`page-button`}>9</button>
              <button className={`page-button`}>10</button>
            </div>
            <button className="page-move-btn">
              Next
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="news-container">
          <NewsletterSubscription openNewsletterDialog={openNewsletterDialog} />
        </div>
      </div>
      {showFilter && <FilterDialog onClose={() => { setShowFilters(false) }} />}
    </>
  );
};

export default NewArrivalsPage;
