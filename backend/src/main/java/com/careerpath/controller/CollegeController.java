package com.careerpath.controller;

import com.careerpath.model.College;
import com.careerpath.service.CollegeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/colleges")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class CollegeController {

    private final CollegeService collegeService;

    @GetMapping
    public ResponseEntity<List<College>> getAllColleges() {
        return ResponseEntity.ok(collegeService.getAllColleges());
    }

    @GetMapping("/{id}")
    public ResponseEntity<College> getCollege(@PathVariable Long id) {
        return ResponseEntity.ok(collegeService.getCollegeById(id));
    }
}
