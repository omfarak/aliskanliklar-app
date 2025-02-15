import React from 'react';
import './AuthCard.css';
import logoGif from '../../../assets/icons/rapi.gif'; // GIF import edilir

const AuthCard = ({ 
  children, 
  logo, 
  logoWidth = "clamp(100px, 30%, 200px)", // Responsive genişlik
}) => (
  <div className="auth-card">
    <div className="auth-card-logo-container">
      <img 
        //if logo valid
        src={logo ? logoGif : null} // Logo varsa logo, yoksa gif
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
);

export default AuthCard;