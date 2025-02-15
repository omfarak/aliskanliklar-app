package com.lolo.habits.Entities;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HabitRepository extends JpaRepository<Habit, Integer> {
}
