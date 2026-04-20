package com.careerpath.service;

import com.careerpath.dto.request.ChatRequest;
import com.careerpath.dto.response.ChatResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Service
@Slf4j
public class AiChatService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    private final String SYSTEM_PROMPT = """
        You are Marg, a friendly career guidance chatbot for Indian students on the StreamSmart platform.
        Your goal is to provide simple, encouraging, and highly specific advice about:
        1. Choice of Streams (Science, Commerce, Arts) after 10th.
        2. Degrees and Higher Education paths after 12th.
        3. Indian entrance exams like JEE, NEET, CUET, CLAT, etc.
        4. Budget-friendly Government Colleges in India.
        5. Scholarships like NSP and Medhavi Chhatra Yojana.
        
        Guidelines:
        - Keep responses concise and student-friendly.
        - Use emojis to make the conversation engaging.
        - Always encourage regular graduation before high-cost private courses.
        - If unsure, suggest checking the platform's career quiz.
        - Respond in the language used by the student (primarily English or Hinglish).
        
        Student's Question:
        """;

    public ChatResponse processMessage(ChatRequest request) {
        try {
            String fullPrompt = SYSTEM_PROMPT + request.getMessage();

            // Prepare Gemini Request Body
            Map<String, Object> requestBody = Map.of(
                "contents", List.of(
                    Map.of("parts", List.of(
                        Map.of("text", fullPrompt)
                    ))
                )
            );

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);
            
            String urlWithKey = apiUrl + "?key=" + apiKey;
            
            ResponseEntity<Map> response = restTemplate.postForEntity(urlWithKey, entity, Map.class);

            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                // Parse Gemini Response
                List candidates = (List) response.getBody().get("candidates");
                if (candidates != null && !candidates.isEmpty()) {
                    Map firstCandidate = (Map) candidates.get(0);
                    Map content = (Map) firstCandidate.get("content");
                    List parts = (List) content.get("parts");
                    if (parts != null && !parts.isEmpty()) {
                        Map firstPart = (Map) parts.get(0);
                        String aiText = (String) firstPart.get("text");

                        return ChatResponse.builder()
                            .message(aiText)
                            .quickReplies(generateQuickReplies(aiText))
                            .confidence(1.0)
                            .build();
                    }
                }
            }
        } catch (Exception e) {
            log.error("Error calling Gemini API: ", e);
        }

        // Fallback if API fails
        return ChatResponse.builder()
            .message("I'm sorry, I'm having a hard time thinking right now. Could you ask me again? 😅")
            .quickReplies(Arrays.asList("Which stream should I choose?", "Tell me about degrees"))
            .confidence(0.0)
            .build();
    }

    private List<String> generateQuickReplies(String responseText) {
        List<String> replies = new ArrayList<>();
        String lowerText = responseText.toLowerCase();
        
        if (lowerText.contains("stream")) replies.add("Take Career Quiz");
        if (lowerText.contains("college")) replies.add("Find Govt Colleges");
        if (lowerText.contains("exam")) replies.add("Show Entrance Exams");
        if (lowerText.contains("scholarship")) replies.add("View Scholarships");
        
        if (replies.isEmpty()) {
            replies.addAll(Arrays.asList("More info", "Take Quiz"));
        }
        
        return replies.subList(0, Math.min(replies.size(), 3));
    }
}
