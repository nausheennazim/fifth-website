import { faAngleRight, faCheck, faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PriceRange from "../components/PriceSlider";
import "../styles/FilterDialog.css"

export default function FilterDialog({ onClose }) {
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('Large');

  const colors = [
    { id: 'green', color: '#4CAF50' },
    { id: 'red', color: '#FF0000' },
    { id: 'yellow', color: '#FFD700' },
    { id: 'orange', color: '#FFA500' },
    { id: 'lightblue', color: '#87CEEB' },
    { id: 'blue', color: '#0000FF' },
    { id: 'purple', color: '#800080' },
    { id: 'pink', color: '#FF69B4' },
    { id: 'white', color: '#FFFFFF' },
    { id: 'black', color: '#000000' }
  ];

  const sizes = [
    'XX-Small', 'X-Small', 'Small',
    'Medium', 'Large', 'X-Large',
    'XX-Large', '3X-Large', '4X-Large'
  ];

  return (
    <div className="filter-dialog">
      <div className='dialog-topbar'>
        <h2 style={{ fontSize: "1.2rem" }}>Filters</h2>
        <FontAwesomeIcon icon={faMultiply} onClick={onClose} />
      </div>
      <hr />
      <div className="category-row">
        <span>Total</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="category-row">
        <span>Shorts</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="category-row">
        <span>Shirts</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="category-row">
        <span>Hoodie</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="category-row">
        <span>Jeans</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <hr />
      <div className="category-row">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}>Price</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <PriceRange />
      <hr />
      <div className="category-row">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}>Colors</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="color-grid">
        {colors.map(({ id, color }) => (
          <button
            key={id}
            className="color-circle"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(id)}
          >
            {selectedColor === id && <FontAwesomeIcon icon={faCheck}
              color={selectedColor === 'white' ? "black" : "white"}
              size="lg"
            />}
          </button>
        ))}
      </div>

      <hr />
      <div className="category-row">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}>Size</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="size-grid">
        {sizes.map(size => (
          <button
            key={size}
            className={`size-pill ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </button>
        ))}
      </div>



      <hr />
      <div className="category-row">
        <span style={{ fontSize: "1.2rem", fontWeight: "bold", color: "black" }}>Dress Style</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="category-row">
        <span>Casual</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <div className="category-row">
        <span>Formal</span>
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  )

}
