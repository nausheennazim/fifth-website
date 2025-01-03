import React from 'react';
import image1 from '../assets/browse-image-1.png'
import image2 from '../assets/browse-image-2.png'
import image3 from '../assets/browse-image-3.png'
import image4 from '../assets/browse-image-4.png'

const styles = {
  container: {
    width: '1200px',
    maxWidth: '1200px',
    backgroundColor: '#333333',
    padding: '24px',
    borderRadius: '12px',
    marginBottom: '50px',
  },
  title: {
    color: '#CCCCCC',
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
  },
  columnContainer: {
    display: 'grid',
    gap: '16px',
  },
  imageWrapper: {
    borderRadius: '8px',
    overflow: 'hidden',
    width: '100%',
    height: '300px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '@media (max-width: 768px)': {
    gridContainer: {
      gridTemplateColumns: '1fr',
    },
  },
};

const ImageGrid = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>BROWSE</h2>
      <div style={styles.gridContainer}>
        <div style={styles.columnContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={image1}
              alt="Fashion photo with metallic accessories"
              style={styles.image}
            />
          </div>
          <div style={styles.imageWrapper}>
            <img
              src={image3}
              alt="Person in Victorian-style red outfit"
              style={styles.image}
            />
          </div>
        </div>
        <div style={styles.columnContainer}>
          <div style={styles.imageWrapper}>
            <img
              src={image2}
              alt="Person holding candle in dark clothing"
              style={styles.image}
            />
          </div>
          <div style={styles.imageWrapper}>
            <img
              src={image4}
              alt="Charm bracelet with cross and star"
              style={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;
