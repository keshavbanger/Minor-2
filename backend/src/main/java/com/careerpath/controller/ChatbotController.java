package com.careerpath.controller;

import com.careerpath.dto.request.ChatRequest;
import com.careerpath.dto.response.ChatResponse;
import com.careerpath.service.AiChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/chatbot")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ChatbotController {

    private final AiChatService aiChatService;

    @PostMapping("/message")
    public ResponseEntity<ChatResponse> getMessage(@RequestBody ChatRequest request) {
        // Rate limiting and logging could be added here
        return ResponseEntity.ok(aiChatService.processMessage(request));
    }
}
