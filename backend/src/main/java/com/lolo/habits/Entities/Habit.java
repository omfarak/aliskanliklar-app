package com.lolo.habits.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
public class Habit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    @ElementCollection
    @Enumerated(EnumType.STRING)
    private Set<DayOfWeek> weekly_frequency;

    private String category;

//    @Enumerated(EnumType.STRING)
//    private Priority priority;
    private boolean reminder;

    @ManyToOne
    @JoinColumn(name= "app_user_id")
    @JsonBackReference
    private AppUser appUser;

    public Habit(){}

    public Habit(String name, Set<DayOfWeek> weekly_frequency, String category, boolean reminder) {
        this.name = name;
        this.weekly_frequency = weekly_frequency;
        this.category = category;
        this.reminder = reminder;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<DayOfWeek> getWeekly_frequency() {
        return weekly_frequency;
    }

    public void setWeekly_frequency(Set<DayOfWeek> weekly_frequency) {
        this.weekly_frequency = weekly_frequency;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public AppUser getUser() {
        return appUser;
    }

    public void setUser(AppUser user) {
        this.appUser = user;
    }

    public boolean isReminder() {
        return reminder;
    }

    public void setReminder(boolean reminder) {
        this.reminder = reminder;
    }
}
