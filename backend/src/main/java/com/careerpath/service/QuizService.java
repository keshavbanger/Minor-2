package com.careerpath.service;

import com.careerpath.dto.request.QuizSubmitRequest;
import com.careerpath.model.QuizResult;
import com.careerpath.model.User;
import com.careerpath.repository.QuizResultRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizResultRepository quizResultRepository;

    public QuizResult calculateAndSaveResult(User user, QuizSubmitRequest request) {
        Map<String, String> answers = request.getAnswers();
        
        // Simple scoring logic based on answer prefixes (s1, c1, a1)
        int science = 0, commerce = 0, arts = 0;
        
        for (String answer : answers.values()) {
            if (answer.startsWith("s")) science += 10;
            else if (answer.startsWith("c")) commerce += 10;
            else if (answer.startsWith("a")) arts += 10;
        }

        int total = science + commerce + arts;
        String recommended = science >= commerce && science >= arts ? "SCIENCE" : 
                             commerce >= arts ? "COMMERCE" : "ARTS";
        
        int matchPercentage = (total > 0) ? (Math.max(science, Math.max(commerce, arts)) * 100 / total) : 0;

        QuizResult result = QuizResult.builder()
                .user(user)
                .scienceScore(science)
                .commerceScore(commerce)
                .artsScore(arts)
                .recommendedStream(recommended)
                .match_percentage(matchPercentage)
                .takenAt(LocalDateTime.now())
                .build();

        return quizResultRepository.save(result);
    }
}
