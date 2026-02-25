package com.careerpath.dto.request;

import lombok.Data;
import java.util.Map;

@Data
public class QuizSubmitRequest {
    private Map<String, String> answers;
}
