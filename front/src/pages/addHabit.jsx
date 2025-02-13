import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import './AddHabit.css';

const AddHabit = () => {
  const { isDarkMode } = useTheme();

  const defaultColors = {
    light: '#3D8D7A', // Light tema için default renk
    dark: '#A64D79'   // Dark tema için default renk
  };

  // Form state'i
  const [habitData, setHabitData] = useState({
    habitName: '',
    frequency: '',
    startDate: '',
    reminder: false,
    category: 'general',
    color: isDarkMode ? defaultColors.dark : defaultColors.light,
    priority: 'medium'
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

  // Form doğrulama
  const validateForm = () => {
    const newErrors = {};

    if (!habitData.habitName.trim()) {
      newErrors.habitName = 'Alışkanlık adı gereklidir';
    }

    if (!habitData.frequency.trim()) {
      newErrors.frequency = 'Sıklık gereklidir';
    }

    if (!habitData.startDate) {
      newErrors.startDate = 'Başlangıç tarihi gereklidir';
    }

    return newErrors;
  };

  // Form gönderme
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form doğrulama
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Form başarılı ise
    console.log('Form gönderildi:', habitData);
    
    // Formu temizle
    setHabitData({
      habitName: '',
      frequency: '',
      startDate: '',
      reminder: false,
      category: 'general',
      color: '#A64D79',
      priority: 'medium'
    });
  };

  return (
    <div className="habit-page-container" data-theme={isDarkMode ? 'dark' : 'light'}>
      <div className="habit-form-wrapper">
        <div className="form-container">
          <h2 className="title">✨ Yeni Alışkanlık Ekle</h2>
          
          <form onSubmit={handleSubmit} className="form">
            <div className="pixel-border">
              {/* Alışkanlık Adı */}
              <div className="input-group">
                <label className="input-label">
                  Alışkanlık Adı
                </label>
                <input
                  type="text"
                  name="habitName"
                  value={habitData.habitName}
                  onChange={handleChange}
                  placeholder="Örn: Günlük Egzersiz"
                  className={`input ${errors.habitName ? 'error' : ''}`}
                />
                {errors.habitName && (
                  <span className="error-text">{errors.habitName}</span>
                )}
              </div>

              {/* Sıklık ve Başlangıç Tarihi */}
              <div className="input-row">
                <div className="input-group">
                  <label className="input-label">
                    Sıklık
                  </label>
                  <input
                    type="text"
                    name="frequency"
                    value={habitData.frequency}
                    onChange={handleChange}
                    placeholder="Örn: Her gün"
                    className={`input ${errors.frequency ? 'error' : ''}`}
                  />
                  {errors.frequency && (
                    <span className="error-text">{errors.frequency}</span>
                  )}
                </div>

                <div className="input-group">
                  <label className="input-label">
                    Başlangıç Tarihi
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    value={habitData.startDate}
                    onChange={handleChange}
                    className={`input ${errors.startDate ? 'error' : ''}`}
                  />
                  {errors.startDate && (
                    <span className="error-text">{errors.startDate}</span>
                  )}
                </div>
              </div>

              {/* Kategori ve Öncelik */}
              <div className="input-row">
                <div className="input-group">
                  <label className="input-label">
                    Kategori
                  </label>
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

                <div className="input-group">
                  <label className="input-label">
                    Öncelik
                  </label>
                  <select
                    name="priority"
                    value={habitData.priority}
                    onChange={handleChange}
                    className="input select-input"
                  >
                    <option value="low">🟢 Düşük</option>
                    <option value="medium">🟡 Orta</option>
                    <option value="high">🔴 Yüksek</option>
                  </select>
                </div>
              </div>

              {/* Renk Seçici */}
              <div className="input-group">
                <label className="input-label">
                  Renk Seç
                </label>
                <div className="color-input-container">
                  <input
                    type="color"
                    name="color"
                    value={habitData.color}
                    onChange={handleChange}
                    className="color-input"
                  />
                </div>
              </div>

              {/* Hatırlatıcı */}
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
            </div>

            {/* Submit Butonu */}
            <button type="submit" className="submit-button">
              ✨ Alışkanlık Ekle
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddHabit;