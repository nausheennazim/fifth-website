import React from "react";
import '../styles/CartPage.css'

import homeProduct1 from '../assets/home-product-1.png'
import homeProduct2 from '../assets/home-product-5.png'
import homeProduct3 from '../assets/home-product-6.png'
import NewsletterSubscription from "../components/NewsLetterSubscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartPage = ({ openNewsletterDialog }) => {
  return (
    <>
      <div className="cart-page">
        <div className="cart-header">
          <nav className="breadcrumb">
            <span>Home</span>
            <span className="separator">&gt;</span>
            <span>Cart</span>
          </nav>
          <h1>YOUR CART</h1>
        </div>

        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-item">
              <img src={homeProduct1} alt="DCA Bait Headband" className="item-image" />
              <div className="item-details">
                <h3>DCA Bait Headband</h3>
                <p>Size: Large</p>
                <p>Color: White</p>
                <p className="price">$145</p>
              </div>
              <div className="quantity-controls">
                <span className="minus">-</span>
                <span>1</span>
                <span className="plus">+</span>
              </div>
              <FontAwesomeIcon icon={faTrash} color="red" />
            </div>

            <div className="cart-item">
              <img src={homeProduct2} alt="Amulet Keychain" className="item-image" />
              <div className="item-details">
                <h3>Amulet Keychain</h3>
                <p>Size: Medium</p>
                <p>Color: Red</p>
                <p className="price">$180</p>
              </div>
              <div className="quantity-controls">
                <span className="minus">-</span>
                <span>1</span>
                <span className="plus">+</span>
              </div>
              <FontAwesomeIcon icon={faTrash} color="red" />
            </div>

            <div className="cart-item">
              <img src={homeProduct3} alt="Skinny Fit Jeans" className="item-image" />
              <div className="item-details">
                <h3>Skinny Fit Jeans</h3>
                <p>Size: Large</p>
                <p>Color: Blue</p>
                <p className="price">$240</p>
              </div>
              <div className="quantity-controls">
                <span className="minus">-</span>
                <span>1</span>
                <span className="plus">+</span>
              </div>
              <FontAwesomeIcon icon={faTrash} color="red" />
            </div>
          </div>

          <div className="order-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span style={{ fontWeight: "bold" }}>$565</span>
            </div>
            <div className="summary-row discount">
              <span style={{ color: "white" }}>Discount (-20%)</span>
              <span style={{ fontWeight: "bold" }}>-$113</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span style={{ fontWeight: "bold" }}>$15</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>$467</span>
            </div>

            <div className="promo-code">
              <div className="promo-input">Add promo code</div>
              <div className="apply-button">Apply</div>
            </div>

            <div className="checkout-button">
              Go to Checkout
              <span className="arrow">→</span>
            </div>
          </div>
        </div>
        <div className="news-container">
          <NewsletterSubscription openNewsletterDialog={openNewsletterDialog} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
