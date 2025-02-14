import React, { useState } from 'react';
import './AuthCard.css';
import logoGif from '../../../assets/icons/rapi.gif';
import PixelErrorAlert from '../../ErrorAlert/ErrorAlert'; // Error Alert import

const AuthCard = ({ 
  children, 
  logo = logoGif, 
  logoAlt = "Logo",
  logoWidth = "clamp(100px, 30%, 200px)", // Responsive genişlik
  errorMessage = null, // Yeni error message prop'u
  errorType = 'error' // Hata tipi için default değer
}) => {
  const [showError, setShowError] = useState(!!errorMessage);

  return (
    <div className="auth-card-wrapper">
      {showError && errorMessage && (
        <PixelErrorAlert 
          message={errorMessage}
          type={errorType}
          duration={3000}
          onClose={() => setShowError(false)}
        />
      )}
      
      <div className="auth-card">
        <div className="auth-card-logo-container">
          <img 
            src={logo} 
            alt={logoAlt} 
            className="auth-card-logo"
            style={{ 
              width: logoWidth,
              height: 'auto',
              maxWidth: '100%',
            }}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthCard;