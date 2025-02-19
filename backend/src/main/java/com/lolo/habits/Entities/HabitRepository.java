package com.lolo.habits.Entities;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HabitRepository extends JpaRepository<Habit, Integer> {
    Page<Habit> getTopByAppUser_Id(int appUserId, Pageable pageable);
    Page<Habit> findByAppUser_Id(int userId, Pageable pageable);

}
