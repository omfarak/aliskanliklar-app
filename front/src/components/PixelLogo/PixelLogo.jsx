import React, { useState } from 'react';
import styles from './PixelLogo.css';

const PixelLogo = ({ 
  src,
  alt = "Logo",
  width = 100,
  height = 100 
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div 
      className={`
        ${styles.logoContainer} 
        ${isAnimating ? styles.animate : ''}
      `}
      onClick={() => setIsAnimating(!isAnimating)}
    >
      <img 
        src={src}
        alt={alt}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          objectFit: 'contain'
        }}
        className={styles.logoImage}
      />
    </div>
  );
};

export default PixelLogo;