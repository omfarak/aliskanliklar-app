import './FormInputs.css';

const FormInput = ({ type, name, placeholder, value, onChange }) => (
    <div className="input-group">
      <input className="auth-input"
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );

export default FormInput;