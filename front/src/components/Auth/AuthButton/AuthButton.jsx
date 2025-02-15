import './AuthButton.css';

// components/AuthButton.jsx
const AuthButton = ({ children, type = "button" }) => (
    <button type={type} className="auth-button">
      {children}
    </button>
  );
  

export default AuthButton;