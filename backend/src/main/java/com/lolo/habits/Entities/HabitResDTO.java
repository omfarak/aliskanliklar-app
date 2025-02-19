package com.lolo.habits.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;
import java.util.List;
import java.util.Set;
import java.time.LocalDate;
import java.time.ZoneId;

public class HabitResDTO extends Habit {
    int id;
    String name;
    private Set<DayOfWeek> weekly_frequency;
    private String category;
    private boolean reminder;
    private int userId;
    private int streak;
    private int longestStreak;
    private List<Date> completedDates;
    private boolean completed;

    @Override
    @JsonIgnore
    public AppUser getUser() {
        return super.getUser();
    }

    public HabitResDTO() {}

    public HabitResDTO(Habit habit) {
        this.id = habit.getId();
        this.name = habit.getName();
        this.weekly_frequency = habit.getWeekly_frequency();
        this.category = habit.getCategory();
        this.reminder = habit.isReminder();
        this.userId = habit.getUser().getId();
        this.streak = habit.getDetails().getStreak();
        this.longestStreak = habit.getDetails().getLongestStreak();
        this.completedDates = habit.getDetails().getCompletedDates();
        this.completed = habit.getDetails().getCompletedDates().stream()
                .anyMatch(date -> date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate().equals(LocalDate.now()));
    }

    @Override
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public void setName(String name) {
        this.name = name;
    }

    @Override
    public Set<DayOfWeek> getWeekly_frequency() {
        return weekly_frequency;
    }

    @Override
    public void setWeekly_frequency(Set<DayOfWeek> weekly_frequency) {
        this.weekly_frequency = weekly_frequency;
    }

    @Override
    public String getCategory() {
        return category;
    }

    @Override
    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public boolean isReminder() {
        return reminder;
    }

    @Override
    public void setReminder(boolean reminder) {
        this.reminder = reminder;
    }

    public int getStreak() {
        return streak;
    }

    public void setStreak(int streak) {
        this.streak = streak;
    }

    public int getLongestStreak() {
        return longestStreak;
    }

    public void setLongestStreak(int longestStreak) {
        this.longestStreak = longestStreak;
    }

    public List<Date> getCompletedDates() {
        return completedDates;
    }

    public void setCompletedDates(List<Date> completedDates) {
        this.completedDates = completedDates;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }
}
