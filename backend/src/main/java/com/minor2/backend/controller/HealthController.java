package com.minor2.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class HealthController {

    @GetMapping("/health")
    public Map<String, String> healthCheck() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "UP");
        status.put("message", "Minor 2 Backend is running smoothly!");
        status.put("version", "1.0.0");
        return status;
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to the Minor 2 Project API. The backend is powered by Spring Boot!";
    }
}
