package com.careerpath.controller;

import com.careerpath.dto.request.QuizSubmitRequest;
import com.careerpath.model.QuizResult;
import com.careerpath.model.User;
import com.careerpath.repository.UserRepository;
import com.careerpath.service.QuizService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/quiz")
@RequiredArgsConstructor

public class QuizController {

    private final QuizService quizService;
    private final UserRepository userRepository;

    @GetMapping("/questions")
    public ResponseEntity<Object> getQuizQuestions() {
        try {
            ClassPathResource resource = new ClassPathResource("quiz/questions.json");
            ObjectMapper mapper = new ObjectMapper();
            var questions = mapper.readValue(resource.getInputStream(), new TypeReference<java.util.List<java.util.Map<String, Object>>>() {});
            return ResponseEntity.ok(java.util.Map.of("questions", questions));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(java.util.Map.of("error", e.getMessage()));
        }
    }

    @PostMapping("/submit")
    public ResponseEntity<QuizResult> submitQuiz(@RequestBody QuizSubmitRequest request) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        User user = userRepository.findByEmail(email).orElseThrow();
        return ResponseEntity.ok(quizService.calculateAndSaveResult(user, request));
    }
}
