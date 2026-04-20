package com.careerpath.service;

import com.careerpath.dto.request.QuizSubmitRequest;
import com.careerpath.model.QuizResult;
import com.careerpath.model.User;
import com.careerpath.repository.QuizResultRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class QuizService {

    private final QuizResultRepository quizResultRepository;
    private final RestTemplate restTemplate = new RestTemplate();
    private static final String ML_SERVICE_URL = "http://localhost:5000/predict";

    public QuizResult calculateAndSaveResult(User user, QuizSubmitRequest request) {
        Map<String, String> answers = request.getAnswers();
        String answersJson = serializeAnswers(answers);

        List<Integer> answerList = new ArrayList<>();
        for (int i = 1; i <= 12; i++) {
            String ans = answers.get(String.valueOf(i));
            try {
                answerList.add(Integer.parseInt(ans));
            } catch (Exception e) {
                answerList.add(0);
            }
        }

        Map<String, Object> mlRequest = Map.of("answers", answerList);
        Map<String, Object> mlResponse;

        try {
            mlResponse = restTemplate.postForObject(ML_SERVICE_URL, mlRequest, Map.class);
        } catch (Exception e) {
            System.err.println("ML Service Error: " + e.getMessage());
            return fallbackCalculate(user, request, answersJson);
        }

        if (mlResponse == null) {
            return fallbackCalculate(user, request, answersJson);
        }

        Map<String, Number> scores = (Map<String, Number>) mlResponse.get("scores");
        String recommendedStream = normalizeStream((String) mlResponse.get("recommendedStream"));

        QuizResult result = QuizResult.builder()
                .user(user)
                .scienceScore(getScoreValue(scores, "science"))
                .commerceScore(getScoreValue(scores, "commerce"))
                .artsScore(getScoreValue(scores, "arts"))
                .recommendedStream(recommendedStream)
                .recommendedCareer((String) mlResponse.get("recommendedCareer"))
                .matchPercentage(((Number) mlResponse.getOrDefault("matchPercentage", 0)).intValue())
                .answersJson(answersJson)
                .takenAt(LocalDateTime.now())
                .build();

        return quizResultRepository.save(result);
    }

    private int getScoreValue(Map<String, Number> scores, String key) {
        if (scores == null) {
            return 0;
        }
        if (scores.containsKey(key)) {
            return scores.get(key).intValue();
        }
        if (scores.containsKey(key.toUpperCase())) {
            return scores.get(key.toUpperCase()).intValue();
        }
        String titleKey = Character.toUpperCase(key.charAt(0)) + key.substring(1).toLowerCase();
        if (scores.containsKey(titleKey)) {
            return scores.get(titleKey).intValue();
        }
        return 0;
    }

    private String normalizeStream(String rawStream) {
        if (rawStream == null) {
            return null;
        }
        String normalized = rawStream.trim().toUpperCase();
        switch (normalized) {
            case "SCIENCE":
                return "Science";
            case "COMMERCE":
                return "Commerce";
            case "ARTS":
                return "Arts";
            default:
                return rawStream;
        }
    }

    private String serializeAnswers(Map<String, String> answers) {
        try {
            return new ObjectMapper().writeValueAsString(answers);
        } catch (Exception e) {
            return "{}";
        }
    }

    private QuizResult fallbackCalculate(User user, QuizSubmitRequest request, String answersJson) {
        Map<String, String> answers = request.getAnswers();
        int science = 0, commerce = 0, arts = 0;

        for (String answer : answers.values()) {
            int value;
            try {
                value = Integer.parseInt(answer);
            } catch (Exception e) {
                value = 0;
            }

            switch (value) {
                case 0:
                case 1:
                    science += 10;
                    break;
                case 3:
                    commerce += 10;
                    break;
                case 2:
                    arts += 10;
                    break;
                case 5:
                    arts += 5;
                    commerce += 5;
                    break;
                default:
                    arts += 5;
            }
        }

        int total = science + commerce + arts;
        String recommended = science >= commerce && science >= arts ? "Science" :
                commerce >= arts ? "Commerce" : "Arts";
        int matchPercentage = (total > 0) ? (Math.max(science, Math.max(commerce, arts)) * 100 / total) : 0;

        return quizResultRepository.save(QuizResult.builder()
                .user(user)
                .scienceScore(science)
                .commerceScore(commerce)
                .artsScore(arts)
                .recommendedStream(recommended)
                .recommendedCareer(recommended.equals("Science") ? "Problem Solver" : recommended.equals("Commerce") ? "Business Strategist" : "Creative Professional")
                .matchPercentage(matchPercentage)
                .answersJson(answersJson)
                .takenAt(LocalDateTime.now())
                .build());
    }
}

