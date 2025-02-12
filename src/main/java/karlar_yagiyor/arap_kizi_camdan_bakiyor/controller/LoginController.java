package karlar_yagiyor.arap_kizi_camdan_bakiyor.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/admin")
public class LoginController {

    @GetMapping("/message")
    public MessageResponse getMessage() {
        return new MessageResponse("Hello World from Backend!", 2025);
    }

    static class MessageResponse{
        private String message;
        private int year;
        public MessageResponse(String message, int year) {
            this.message = message;
            this.year = year;
        }

        public String getMessage() {
            return message;
        }

        public int getYear() {
            return year;
        }
    }

}

