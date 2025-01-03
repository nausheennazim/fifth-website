import React, { useState, useRef, useEffect } from 'react';
import '../styles/PriceSlider.css'

const PriceRange = () => {
  const [minVal, setMinVal] = useState(50);
  const [maxVal, setMaxVal] = useState(200);
  const minValRef = useRef(50);
  const maxValRef = useRef(200);
  const range = useRef(null);

  const getPercent = (value) => {
    return Math.round(((value - 50) / (200 - 50)) * 100);
  };

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal]);

  return (
    <div className="price-container">
      <div className="slider-container">
        <input
          type="range"
          min={50}
          max={200}
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1);
            setMinVal(value);
            minValRef.current = value;
          }}
          className="thumb thumb--left"
        />
        <input
          type="range"
          min={50}
          max={200}
          value={maxVal}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1);
            setMaxVal(value);
            maxValRef.current = value;
          }}
          className="thumb thumb--right"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
        </div>
      </div>
      <div className="price-labels">
        <span>${minVal}</span>
        <span>${maxVal}</span>
      </div>
    </div>
  );
};

export default PriceRange;
