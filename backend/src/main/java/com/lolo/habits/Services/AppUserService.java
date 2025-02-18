package com.lolo.habits.Services;

import com.lolo.habits.Entities.AppUser;
import com.lolo.habits.Entities.AppUserRepository;
import com.lolo.habits.Entities.Habit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppUserService {
    @Autowired
    AppUserRepository appUserRepository;

    public AppUser findByUsernameAndPassword(String username, String password) {
        return appUserRepository.findByUsernameAndPassword(username, password);
    }

    public AppUser findByEmailAndPassword(String email, String password) {
        return appUserRepository.findByEmailAndPassword(email, password);
    }

    public Boolean existsByUsername(String username) {
        return appUserRepository.existsByUsername(username);
    }

    public Boolean existsByEmail(String email) {
        return appUserRepository.existsByEmail(email);
    }


    public List<AppUser> getUsers() {
        return appUserRepository.findAll();
    }

    public AppUser getUser(int userId) {
        return appUserRepository.findById(userId).orElse(null);
    }

    public AppUser addUser(AppUser user) {
        return appUserRepository.save(user);
    }

    public void deleteUser(int userId) {
        appUserRepository.deleteById(userId);
    }

    public void updateUser(AppUser user) {
        appUserRepository.save(user);
    }

    public List<Habit> getHabits(int userId) {
        AppUser appUser = getUser(userId);
        if (appUser != null)
            return appUser.getHabits();
        return null;
    }

    public void addHabit(int userId, Habit habit) {
        AppUser appUser = getUser(userId);
        if (appUser != null) {
            appUser.addHabit(habit);
            appUserRepository.save(appUser);
        }
    }
}
