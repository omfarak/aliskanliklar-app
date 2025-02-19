import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import AuthContainer from '../../components/Auth/AuthContainer/AuthContainer';
import AuthCard from '../../components/Auth/AuthCard/AuthCard';
import FormInput from '../../components/FormInputs/FormInputs';
import AuthButton from '../../components/Auth/AuthButton/AuthButton';
import gif from '../../assets/icons/bit.gif';
import { useNavigate } from 'react-router-dom';
import './AddHabit.css';
import axios from "axios";
import AuthPixelAlert from "../../components/Auth/AuthPixelAlert/AuthPixelAlert";

const AddHabit = () => {
  const { isDarkMode } = useTheme();

  // Form state'i
  const [habitData, setHabitData] = useState({
    habitName: '',
    reminder: false,
    category: 'general',
    frequency: {
      Pzt: false,
      Salı: false,
      Çrş: false,
      Prş: false,
      Cuma: false,
      Cmrt: false,
      Pzr: false
    }
  });

  

  // Hata mesajları state'i
  const [errors, setErrors] = useState({});


  // Input değişikliklerini handle eden fonksiyon
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHabitData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Hata mesajını temizle
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Günlerin seçimini handle eden fonksiyon
  const handleDayToggle = (day) => {
    setHabitData(prev => ({
      ...prev,
      frequency: {
        ...prev.frequency,
        [day]: !prev.frequency[day]
      }
    }));
  };

  // Form doğrulama
  const validateForm = () => {
    const newErrors = {};

    if (!habitData.habitName.trim()) {
      newErrors.habitName = 'Alışkanlık adı gereklidir';
    }

    if (habitData.frequency.length === 0) {
      newErrors.frequency = 'En az bir gün seçmelisiniz';
    }

    return newErrors;
  };

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
          "http://localhost:8080/api/users/add-habit",
          habitData,
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
      );
      console.log("Habit added:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
        AuthPixelAlert.error(error.response.data);
    }
  };

  const navigate = useNavigate();

  return (
    <AuthContainer>
      <button 
        className="go-back-button" 
        onClick={() => navigate(-1)}
      >
        ← Geri Dön
      </button>


      <AuthCard logo='' >
        <h2>✨ Yeni Alışkanlık Ekle</h2>
        
        <form onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="habitName"
            placeholder="Alışkanlık Adı"
            value={habitData.habitName}
            onChange={handleChange}
            error={errors.habitName}
            validationRules={{
              required: {
                value: true,
                message: 'Alışkanlık adı gereklidir'
              }
            }}
          />

          <div className="frequency-selector">
            <h3>Alışkanlık Günleri</h3>
            <div className="day-buttons">
              {Object.keys(habitData.frequency).map((day, index) => (
                <button
                  key={index}
                  type="button"
                  className={`day-button ${
                    habitData.frequency[day] ? 'selected' : ''
                  }`}
                  onClick={() => handleDayToggle(day)}
                >
                  {day}
                </button>
              ))}
            </div>
            {errors.frequency && (
              <span className="error-text">{errors.frequency}</span>
            )}
          </div>

          <div className="input-group">
            <h3 className="input-label">
              Kategori
            </h3>
            <select
              name="category"
              value={habitData.category}
              onChange={handleChange}
              className="input select-input"
            >
              <option value="general">🎯 Genel</option>
              <option value="health">💪 Sağlık</option>
              <option value="productivity">⚡ Üretkenlik</option>
              <option value="education">📚 Eğitim</option>
              <option value="finance">💰 Finans</option>
              <option value="social">🤝 Sosyal</option>
            </select>
          </div>

          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="reminder"
                checked={habitData.reminder}
                onChange={handleChange}
              />
              <span className="checkbox-text">
                🔔 Hatırlatıcı ekle
              </span>
            </label>
          </div>

          <AuthButton type="submit">
            <style>
              {`
                .auth-button {
                  margin-top: 1rem;
                }
              `}
            </style>
            ✨ Alışkanlık Ekle
          </AuthButton>
        </form>
      </AuthCard>
    </AuthContainer>
  );
};

export default AddHabit;