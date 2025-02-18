package com.lolo.habits.Controllers;

import com.lolo.habits.Entities.AppUser;
import com.lolo.habits.Entities.LoginReqDto;
import com.lolo.habits.Services.AppUserService;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")

public class AuthController {
    private final AppUserService appUserService;

    public AuthController(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginReqDto loginRequest, HttpSession session) {
        AppUser user = appUserService.findByUsernameAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        if(user == null) {
            user = appUserService.findByEmailAndPassword(loginRequest.getUsername(), loginRequest.getPassword());
        }

        if (user == null) {
            return ResponseEntity.status(400).body("Invalid username/email or password");
        }

        session.setAttribute("USER", user.getId());
        System.out.println("Session ID:" + session.getId());
        System.out.println(session.getAttribute("USER"));
        return ResponseEntity.ok("Login successful");
    }

    @GetMapping("/me")
    public ResponseEntity<?> me(HttpSession session) {
        Integer userId = (Integer) session.getAttribute("USER");

        System.out.println("Session ID:" + session.getId());
        System.out.println(session.getAttribute("USER"));

        if(userId == null){
            return ResponseEntity.status(400).body("No user saved to session");
        }
        AppUser user = appUserService.getUser(userId);
        if(user == null){
            return ResponseEntity.status(400).body("User not found");
        }

        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody AppUser user) {
        boolean valid1 = appUserService.existsByUsername(user.getUsername());
        boolean valid2 = appUserService.existsByEmail(user.getEmail());
        if (valid1 && valid2) {
            return ResponseEntity.status(400).body("Username and email already exist");
        }
        if(valid1){
            return ResponseEntity.status(400).body("Username already exists");
        }
        if(valid2){
            return ResponseEntity.status(400).body("Email already exists");
        }

        AppUser newUser = appUserService.addUser(user);
        if (newUser == null) {
            return ResponseEntity.status(400).body("User cannot be registered");
        }
        else {
            return ResponseEntity.ok("User registered successfully");
        }
    }
}
