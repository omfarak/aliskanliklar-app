package com.lolo.habits.Entities;

import java.util.Map;

public class HabitReqDTO {
    private String habitName;
    private boolean reminder;
    private String category;
    private Map<String, Boolean> frequency;

    public HabitReqDTO(String habitName, boolean reminder, String category, Map<String, Boolean> frequency) {
        this.habitName = habitName;
        this.reminder = reminder;
        this.category = category;
        this.frequency = frequency;
    }

    public String getHabitName() {
        return habitName;
    }

    public void setHabitName(String habitName) {
        this.habitName = habitName;
    }

    public boolean isReminder() {
        return reminder;
    }

    public void setReminder(boolean reminder) {
        this.reminder = reminder;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Map<String, Boolean> getFrequency() {
        return frequency;
    }

    public void setFrequency(Map<String, Boolean> frequency) {
        this.frequency = frequency;
    }
}
