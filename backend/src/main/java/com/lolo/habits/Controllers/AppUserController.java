package com.lolo.habits.Controllers;

import com.lolo.habits.Entities.AppUser;
import com.lolo.habits.Entities.AppUserRepository;
import com.lolo.habits.Entities.Habit;
import com.lolo.habits.Services.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class AppUserController {
    final
    AppUserService appUserService;

    public AppUserController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @GetMapping
    public List<AppUser> getAllUsers() {
        return appUserService.getUsers();
    }

    @PostMapping
    public AppUser createUser(@RequestBody AppUser appUser) {
        appUserService.addUser(appUser);
        return appUser;
    }

    @GetMapping("/{userid}")
    public AppUser getUserById(@PathVariable("userid") Integer userid) {
        return appUserService.getUser(userid);
    }

    @GetMapping("/habits/{userid}")
    public List<Habit> getUserHabits(@PathVariable("userid") Integer userid) {
        return appUserService.getHabits(userid);
    }

    @PostMapping("/habits/{userid}")
    public void addUserHabit(@PathVariable("userid") Integer userid, @RequestBody Habit habit) {
        appUserService.addHabit(userid, habit);
    }
}
