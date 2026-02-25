package com.careerpath.service;

import com.careerpath.dto.request.ChatRequest;
import com.careerpath.dto.response.ChatResponse;
import org.springframework.stereotype.Service;
import java.util.Arrays;

@Service
public class AiChatService {

    private final String SYSTEM_PROMPT = """
        You are Marg, a friendly career guidance chatbot for Indian students.
        Your goal is to provide simple, encouraging advice about streams (Science, Commerce, Arts),
        degrees, government colleges, and scholarships.
    """;

    public ChatResponse processMessage(ChatRequest request) {
        // In a real implementation, you would call Anthropic Claude or OpenAI API here.
        // Example with simulated logic:
        
        String input = request.getMessage().toLowerCase();
        
        // Mocking an AI response logic
        if (input.contains("help")) {
            return ChatResponse.builder()
                .message("I'm Marg! I can help you find your dream career. Try asking 'Which stream is best?'")
                .quickReplies(Arrays.asList("Which stream is best?", "Find colleges"))
                .confidence(1.0)
                .build();
        }

        return ChatResponse.builder()
            .message("That's an interesting question! As an AI, I suggest exploring our degree database for more details.")
            .quickReplies(Arrays.asList("Show degrees", "Take quiz"))
            .confidence(0.5)
            .build();
    }
}
