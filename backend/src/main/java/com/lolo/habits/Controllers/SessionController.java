package com.lolo.habits.Controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/session")
@CrossOrigin(origins = "*")
public class SessionController {
    @PostMapping("/set-session")
    public String setSession(@RequestParam String username, HttpSession session) {
        session.setAttribute("USER", username);
        return "Session attribute set: " + username + "\nSession id: " + session.getId() + "\n";
    }

    @GetMapping("/get-session")
    public String getSession(HttpSession session) {
        String user = (String) session.getAttribute("USER");
        return user != null ? "Session attribute: " + user + "\nSession id: " + session.getId() + "\n" : "No session attribute found!";
    }
}
