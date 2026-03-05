package com.careerpath.controller;

import com.careerpath.model.Scholarship;
import com.careerpath.service.ScholarshipService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/scholarships")
@RequiredArgsConstructor

public class ScholarshipController {
    private final ScholarshipService scholarshipService;

    @GetMapping
    public ResponseEntity<List<Scholarship>> getAllScholarships() {
        return ResponseEntity.ok(scholarshipService.getAllScholarships());
    }
}
