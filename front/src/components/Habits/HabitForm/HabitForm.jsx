import React, { useState } from 'react';
import styles from './HabitForm.module.css';

const HabitForm = () => {
  const [habitName, setHabitName] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Habit:', habitName, 'Frequency:', frequency);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>New Habit</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.pixelBorder}>
          <input
            type="text"
            placeholder="Habit Name"
            value={habitName}
            onChange={(e) => setHabitName(e.target.value)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Frequency (e.g., daily)"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>
          Add Habit
        </button>
      </form>
    </div>
  );
};

export default HabitForm;