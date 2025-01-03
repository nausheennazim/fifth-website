import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ name, rating, price, img, isTransparent }) => {
  const renderStars = (rating) => {

    if (typeof rating !== 'number' || rating < 0) {
      return null; // Return nothing or some fallback UI if rating is invalid
    }
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <span>
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} color="gold" />
        ))}
        {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} color="gold" />}
      </span>
    );
  };

  return (
    <div className="product-card"
      style={isTransparent ? { "backgroundColor": "transparent" } : {}}>
      <img
        src={img}
        alt="Product"
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-title">{name}</h3>
        <div className="product-rating">
          {renderStars(rating)}
          <span className="rating-score">{rating}/5</span>
        </div>
        <div className='price-discount'>
          <p className="product-price">${price}</p>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;
