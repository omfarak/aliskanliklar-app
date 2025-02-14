import React, { useState } from "react";
import AuthContainer from "../../components/Auth/AuthContainer/AuthContainer";
import AuthButton from "../../components/Auth/AuthButton/AuthButton";
import AuthCard from "../../components/Auth/AuthCard/AuthCard";
import FormInput from "../../components/FormInputs/FormInputs";
import AuthLink from "../../components/Auth/AuthLink/AuthLink";
import AuthPixelAlert from "../../components/Auth/AuthPixelAlert/AuthPixelAlert";
import axios from "axios";


import "./Register.css";

function Register() {
  const gifPath = "../../assets/icons/rapi.gif";
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
    general: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    try {
      console.log("here");
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Registration successful:", response.data);
      setFormData({
        username: "",
        password: "",
        email: "",
      });

    } catch (error) {
      if (error.response.data == "Username already exists") {
        AuthPixelAlert.error("Username already exists");
        setErrors((prevState) => ({
          ...prevState,
          username: "Username already exists",
        }));
      }
    }
  };

  return (
    <AuthContainer>
      <AuthCard>
        <h1>Kayıt Ol</h1>
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="username"
            placeholder="Kullanıcı Adı"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Şifre"
            value={formData.password}
            onChange={handleChange}
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <AuthButton type="submit">Kayıt Ol</AuthButton>
        </form>

        <AuthLink
          text="Already have an account?"
          linkText="Login"
          href="/login"
        />
      </AuthCard>
    </AuthContainer>
  );
}

export default Register;
