// components/LoginPage.jsx
import React, { useState } from 'react';
import AuthContainer from '../components/Auth/AuthContainer/AuthContainer';
import AuthButton from '../components/Auth/AuthButton/AuthButton';
import AuthCard from '../components/Auth/AuthCard/AuthCard';
import FormInput from '../components/FormInputs/FormInputs';
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
    <AuthContainer>
      <AuthCard>
        <Logo />
        <h1>Giriş Yap</h1>
        
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="username"
            placeholder="Username/Email"
            value={formData.username}
            onChange={handleChange}
          />
          
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          
          <FormFooter
            rememberMe={formData.rememberMe}
            onRememberMeChange={handleChange}
          />
          
          <AuthButton type="submit">
            Login
          </AuthButton>
        </form>
        
        <div className="signup-link">
          <p>Sign Up →</p>
        </div>
        
        <SocialButtons />
      </AuthCard>
    </AuthContainer>
  );
}

export default LoginPage;



// components/FormInput.jsx



// components/Logo.jsx
const Logo = () => (
  <div className="logo">
    <div className="pacman-logo"></div>
    <div className="adventure-text">Welcome to the Habyte</div>
  </div>
);

// components/FormFooter.jsx
const FormFooter = ({ rememberMe, onRememberMeChange }) => (
  <div className="form-footer">
    <label className="remember-me">
      <input
        type="checkbox"
        name="rememberMe"
        checked={rememberMe}
        onChange={onRememberMeChange}
      />
      Remember Me
    </label>
    <a href="#" className="forgot-password">
      Forgot Password?
    </a>
  </div>
);

// components/SocialButtons.jsx
const SocialButtons = () => (
  <div className="social-buttons">
    <button className="social-button">7</button>
    <button className="social-button">T</button>
    <button className="social-button">D</button>
  </div>
);