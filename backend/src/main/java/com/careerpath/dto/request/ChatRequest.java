package com.careerpath.dto.request;

import lombok.Data;
import java.util.List;

@Data
public class ChatRequest {
    private String message;
    private String sessionId;
    private String language;
}
