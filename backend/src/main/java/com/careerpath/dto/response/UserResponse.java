package com.careerpath.dto.response;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponse {
    private Long id;
    private String fullName;
    private String email;
    private String mobile;
    private String currentClass;
    private String role;
}
