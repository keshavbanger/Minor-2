package com.careerpath.controller;

import com.careerpath.model.EntranceExam;
import com.careerpath.service.ExamService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/exams")
@RequiredArgsConstructor

public class ExamController {
    private final ExamService examService;

    @GetMapping
    public ResponseEntity<List<EntranceExam>> getAllExams() {
        return ResponseEntity.ok(examService.getAllExams());
    }
}
