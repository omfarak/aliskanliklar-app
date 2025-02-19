// HabitContainer.jsx
import React, { useState } from 'react';
import HabitCard from '../HabitCard/HabitCard';
import './HabitContainer.css';

const HabitContainer = () => {
    const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

    const stats = {
        total: 8,
        completed: 5,
        streak: 12
    };

    const habits = [
        {
            id: 1,
            name: "Günlük Egzersiz",
            streak: 5,
            completed: false
        },
        {
            id: 2,
            name: "Su İçmek",
            streak: 12,
            completed: true
        },
        // ... diğer alışkanlıklar
    ];

    const filteredHabits = habits.filter(habit => {
        if (filter === 'completed') return habit.completed;
        if (filter === 'pending') return !habit.completed;
        return true;
    });

    return (
        <div className="habits-container">
            <div className="content-wrapper">
                <div className="habits-header">
                    <div className="habits-summary">
                        <h2 className="summary-title">Alışkanlık Özetin</h2>
                        <div className="summary-stats">
                            <div className="stat-item">
                                <div className="stat-value">{stats.total}</div>
                                <div className="stat-label">Toplam Alışkanlık</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">{stats.completed}</div>
                                <div className="stat-label">Bugün Tamamlanan</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-value">{stats.streak}</div>
                                <div className="stat-label">En Uzun Streak</div>
                            </div>
                        </div>
                    </div>

                    <div className="filter-bar">
                        <button
                            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            Tümü
                        </button>
                        <button
                            className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
                            onClick={() => setFilter('completed')}
                        >
                            Tamamlanan
                        </button>
                        <button
                            className={`filter-button ${filter === 'pending' ? 'active' : ''}`}
                            onClick={() => setFilter('pending')}
                        >
                            Bekleyen
                        </button>
                    </div>
                </div>

                <div className="habits-section">
                    <div className="habits-section-title">
                        Günlük Alışkanlıklar
                        <button className="add-habit-button">
                            <span>+</span> Yeni Alışkanlık
                        </button>
                    </div>

                    <div className="habits-list">
                        {filteredHabits.length > 0 ? (
                            filteredHabits.map(habit => (
                                <HabitCard
                                    key={habit.id}
                                    habit={habit}
                                    onComplete={() => { }}
                                    onEdit={() => { }}
                                    onDelete={() => { }}
                                />
                            ))
                        ) : (
                            <div className="empty-state">
                                Henüz alışkanlık eklenmemiş
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HabitContainer;