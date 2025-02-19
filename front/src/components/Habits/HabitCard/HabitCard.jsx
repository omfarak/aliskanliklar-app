    // HabitCard.jsx
    import React, { useState } from 'react';
    import './HabitCard.css';

    const HabitCard = ({ habit, onComplete, onEdit, onDelete }) => {
        const [menuOpen, setMenuOpen] = useState(false);

        const toggleMenu = (e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
        };

        const handleEdit = () => {
            onEdit(habit);
            setMenuOpen(false);
        };

        const handleDelete = () => {
            onDelete(habit);
            setMenuOpen(false);
        };

        return (
            <div className="habit-card">
                <div className="habit-card-left">
                    <input
                        type="checkbox"
                        className="habit-checkbox"
                        checked={habit.completed}
                        onChange={() => onComplete(habit)}
                    />
                    <div className="habit-info">
                        <div className="habit-name">{habit.name}</div>
                        <div className="habit-streak">
                            {habit.streak} gün streak 🔥
                        </div>
                    </div>
                </div>

                <div className="habit-menu">
                    <button className="menu-button" onClick={toggleMenu}>
                        <div className="menu-dots">
                            <div className="menu-dot"></div>
                            <div className="menu-dot"></div>
                            <div className="menu-dot"></div>
                        </div>
                    </button>
                    <div className={`menu-content ${menuOpen ? 'active' : ''}`}>
                        <div className="menu-item" onClick={handleEdit}>
                            <span>✏️</span> Düzenle
                        </div>
                        <div className="menu-item" onClick={handleDelete}>
                            <span>🗑️</span> Sil
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    export default HabitCard;