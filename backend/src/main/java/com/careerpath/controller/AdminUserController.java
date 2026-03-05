package com.careerpath.controller;

import com.careerpath.dto.response.UserResponse;
import com.careerpath.model.User;
import com.careerpath.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/admin/users")
@RequiredArgsConstructor

public class AdminUserController {

    private final UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<UserResponse>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll().stream()
                .map(this::mapToUserResponse)
                .collect(Collectors.toList()));
    }

    private UserResponse mapToUserResponse(User user) {
        return UserResponse.builder()
                .id(user.getId())
                .fullName(user.getFullName())
                .email(user.getEmail())
                .mobile(user.getMobile())
                .currentClass(user.getCurrentClass().name())
                .role(user.getRole().name())
                .build();
    }
}
