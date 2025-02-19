package com.lolo.habits.Entities;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class HabitDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int streak;
    private int longestStreak;

    @ElementCollection
    private List<Date> completedDates;

    @OneToOne
    private Habit habit;

    public HabitDetails() {
        streak = 0;
        longestStreak = 0;
        completedDates = new ArrayList<>();
    }

    public int getStreak() {
        return streak;
    }

    public void setStreak(int streak) {
        this.streak = streak;
        if (streak > longestStreak) {
            longestStreak = streak;
        }
    }

    public int getLongestStreak() {
        return longestStreak;
    }

    public int getId() {
        return id;
    }

    public List<Date> getCompletedDates() {
        return completedDates;
    }

    public void setCompletedDates(List<Date> completedDates) {
        this.completedDates = completedDates;
    }

    public void addCompletedDate(Date date) {
        this.completedDates.add(date);
    }
}
