import React, { useState, useEffect } from 'react';
import './ErrorAlert.css';

const PixelErrorAlert = ({ 
  message, 
  type = 'error', 
  duration = 3000 
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className={`pixel-alert pixel-alert-${type}`}>
      <div className="pixel-alert-border">
        <div className="pixel-alert-content">
          <div className="pixel-alert-icon">
            {type === 'error' && '❌'}
            {type === 'warning' && '⚠️'}
            {type === 'success' && '✅'}
          </div>
          <p className="pixel-alert-message">{message}</p>
        </div>
        <div className="pixel-alert-close" onClick={() => setVisible(false)}>
          X
        </div>
      </div>
    </div>
  );
};

export default PixelErrorAlert;