// LoginPage.jsx
import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="login-card">
      <div className="logo">
  <div className="pacman-logo"></div>
  
  <div class="adventure-text">Welcome to the Habyte</div>
</div>
        <h1>Giriş Yap</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username/Email"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-footer">
            <label className="remember-me">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          
          <button type="submit" className="login-button">Login</button>
        </form>
        
        <div className="signup-link">
          <p>Sign Up →</p>
        </div>
        
        <div className="social-buttons">
          <button className="social-button">7</button>
          <button className="social-button">T</button>
          <button className="social-button">D</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;