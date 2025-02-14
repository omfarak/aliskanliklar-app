import React, { useState, useEffect } from 'react';
import './ErrorAlert.css';

const PixelErrorAlert = ({ 
  message, 
  type = 'error', 
  duration = 3000,
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose && onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`pixel-error-alert pixel-error-${type}`}>
      <div className="pixel-error-content">
        <div className="pixel-error-icon">
          {type === 'error' && '❌'}
          {type === 'warning' && '⚠️'}
          {type === 'success' && '✅'}
        </div>
        <p className="pixel-error-message">{message}</p>
        <button 
          className="pixel-error-close" 
          onClick={() => {
            setIsVisible(false);
            onClose && onClose();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PixelErrorAlert;