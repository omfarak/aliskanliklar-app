import React from 'react';
import './FormInputs.css';

function FormInput({ 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  error 
}) {
  return (
    <div className="form-input-container">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`form-input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default FormInput;