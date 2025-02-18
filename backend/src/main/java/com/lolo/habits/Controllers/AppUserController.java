package com.lolo.habits.Controllers;

import com.lolo.habits.Entities.*;
import com.lolo.habits.Services.AppUserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<?> addHabit(@RequestBody HabitReqDTO habitReqDTO, HttpSession session) {
        AppUser user = appUserService.getUser((Integer) session.getAttribute("USER"));
        if (user == null) {
            return ResponseEntity.status(400).body("Session user not found / add-habit");
        }
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
        System.out.println(habitReqDTO.getHabitName());
        System.out.println(freq);
        System.out.println(habitReqDTO.getCategory());
        System.out.println(habitReqDTO.isReminder());


        Habit newHabit = new Habit(habitReqDTO.getHabitName(), freq, habitReqDTO.getCategory(), habitReqDTO.isReminder());

        appUserService.addHabit(user.getId(), newHabit);
        return ResponseEntity.ok("Habit added successfully");
    }

    @GetMapping("/get-habit")
    public ResponseEntity<?> addHabit(HttpSession session) {
        AppUser user = appUserService.getUser((Integer) session.getAttribute("USER"));
        if (user == null) {
            return ResponseEntity.status(400).body("Session user not found / add-habit");
        }
        return ResponseEntity.ok(user.getHabits());
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
