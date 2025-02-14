// components/LoginPage.jsx
import React, { useState } from 'react';
import AuthContainer from '../../components/Auth/AuthContainer/AuthContainer';
import AuthButton from '../../components/Auth/AuthButton/AuthButton';
import AuthCard from '../../components/Auth/AuthCard/AuthCard';
import FormInput from '../../components/FormInputs/FormInputs';
import logo from '../../assets/icons/baha.png'
import PixelLogo from '../../components/PixelLogo/PixelLogo';
import PixelErrorAlert from '../../components/ErrorAlert/ErrorAlert';
import './LoginPage.css';


function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    general: ''
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('error');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    };


   // Genel handleChange metodu
   const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Farklı input türlerine göre state güncelleme
    setFormData(prevState => ({
      ...prevState, // Önceki state'i koru
      [name]: type === 'checkbox' ? checked : value
    }));

    // Dinamik validasyon
    validateField(name, value);
  };


   // Detaylı alan validasyonu
   const validateField = (name, value) => {
    let errorMessage = '';

    switch(name) {
      case 'username':
        if (value.length < 3) {
          errorMessage = 'Kullanıcı adı en az 3 karakter olmalı';
        }
        break;
      
      case 'password':
        if (value.length < 6) {
          errorMessage = 'Şifre en az 6 karakter olmalı';
        }
        break;
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          errorMessage = 'Geçerli bir email adresi girin';
        }
        break;
      
      default:
        break;
    }

    // Hata state'ini güncelle
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: errorMessage
    }));
  };

  // Önceki validation ve submit metodları aynı kalacak

  return (
    <AuthContainer>
      {showAlert && (
        <PixelErrorAlert 
          message={alertMessage}
          type={alertType}
          duration={3000}
          onClose={() => setShowAlert(false)}
        />
      )}

      <AuthCard>
        <h1>Giriş Yap</h1>
        
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="username"
            placeholder="Username/Email"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
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