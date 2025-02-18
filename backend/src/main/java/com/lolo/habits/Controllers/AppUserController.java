package com.lolo.habits.Controllers;

import com.lolo.habits.Entities.*;
import com.lolo.habits.Services.AppUserService;
import com.lolo.habits.security.CurrentUser;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class AppUserController {
    final
    AppUserService appUserService;

    @PostMapping("/add-habit")
    public void addHabit(@RequestBody HabitReqDTO habitReqDTO, @CurrentUser AppUser currentUser) {
        System.out.println(currentUser);
        Set<DayOfWeek> freq = new HashSet<>();

        // Retrieve the frequency map from the DTO
        Map<String, Boolean> freqMap = habitReqDTO.getFrequency();

        // Use index to map to DayOfWeek
        int i = 0;
        for (Map.Entry<String, Boolean> entry : freqMap.entrySet()) {
            if (entry.getValue()) {
                try {
                    // Map the index (1-based) to DayOfWeek and add to the Set
                    DayOfWeek dayOfWeek = DayOfWeek.values()[i];
                    freq.add(dayOfWeek);
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.err.println("Index out of bounds: " + i);
                    // Potential handling for invalid index
                }
            }
            i++;
        }
/*        System.out.println(habitReqDTO.getHabitName());
        System.out.println(freq);
        System.out.println(habitReqDTO.getCategory());
        System.out.println(habitReqDTO.isReminder());*/


        Habit newHabit = new Habit(habitReqDTO.getHabitName(), freq, habitReqDTO.getCategory(), habitReqDTO.isReminder());


    }

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
