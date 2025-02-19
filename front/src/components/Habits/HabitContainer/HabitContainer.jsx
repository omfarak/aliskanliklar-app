// HabitContainer.jsx
import React, { useState, useEffect } from 'react';
import HabitCard from '../HabitCard/HabitCard';
import './HabitContainer.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Constants
const FILTER_OPTIONS = {
    ALL: 'all',
    COMPLETED: 'completed',
    PENDING: 'pending'
};
const DEFAULT_STATS = {
    total: 0,
    completed: 0,
    streak: 0
};

const HabitContainer = () => {
    const navigate = useNavigate();
    const [filter, setFilter] = useState(FILTER_OPTIONS.ALL);
    const [habits, setHabits] = useState([]);
    const stats = DEFAULT_STATS;

    // Fetch habits
    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/users/get-habit", {
                    params:{
                        page: 0,
                        perPage: 10
                    },
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                });
                console.log("Fetched habits:", response);
                setHabits(response.data);
                stats.total = habits.length;
                stats.completed = habits.filter(habit => {
                    return habit.completed
                }).length;
                habits.forEach(habit => {
                    if (habit.longestStreak > stats.streak) {
                        stats.streak = habit.longestStreak;
                    }
                })
            } catch (error) {
                console.error("Error fetching habits:", error);
            }
        };
        fetchHabits();
    }, []);

    // Filter habits utility
    const getFilteredHabits = () => {
        if (!Array.isArray(habits)) return [];
        return habits.filter(habit => {
            if (filter === FILTER_OPTIONS.COMPLETED) return habit.completed;
            if (filter === FILTER_OPTIONS.PENDING) return !habit.completed;
            return true;
        });
    };

    // Handlers
    const markAsComplete = habitId => {
        setHabits(prevHabits =>
            prevHabits.map(habit =>
                habit.id === habitId ? { ...habit, completed: true } : habit
            )
        );
    };

    // JSX Rendering
    const renderStats = () =>
        Object.entries(stats).map(([key, value]) => (
            <div key={key} className="stat-item">
                <div className="stat-value">{value}</div>
                <div className="stat-label">
                    {key === 'total' ? 'Toplam Alışkanlık' : key === 'completed' ? 'Bugün Tamamlanan' : 'En Uzun Streak'}
                </div>
            </div>
        ));

    return (
        <div className="habits-container">
            <div className="content-wrapper">
                <div className="habits-header">
                    <div className="habits-summary">
                        <h2 className="summary-title">Alışkanlık Özetin</h2>
                        <div className="summary-stats">{renderStats()}</div>
                    </div>
                    <div className="filter-bar">
                        {Object.values(FILTER_OPTIONS).map(option => (
                            <button
                                key={option}
                                className={`filter-button ${filter === option ? 'active' : ''}`}
                                onClick={() => setFilter(option)}
                            >
                                {option === 'all' ? 'Tümü' : option === 'completed' ? 'Tamamlanan' : 'Bekleyen'}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="habits-section">
                    <div className="habits-section-title">
                        Günlük Alışkanlıklar
                        <button className="add-habit-button" onClick={() => navigate("/add-habit")}>
                            <span>+</span> Yeni Alışkanlık
                        </button>
                    </div>
                    <div className="habits-list">
                        {getFilteredHabits().length > 0 ? (
                            getFilteredHabits().map(habit => (
                                <HabitCard
                                    key={habit.id}
                                    habit={habit}
                                    onComplete={() => { }}
                                    onEdit={() => { }}
                                    onDelete={() => { }}
                                />
                            ))
                        ) : (
                            <div className="empty-state">Henüz alışkanlık eklenmemiş</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HabitContainer;