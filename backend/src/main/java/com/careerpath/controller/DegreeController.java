package com.careerpath.controller;

import com.careerpath.model.Degree;
import com.careerpath.service.DegreeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/v1/degrees")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DegreeController {

    private final DegreeService degreeService;

    @GetMapping
    public ResponseEntity<List<Degree>> getAllDegrees(
            @RequestParam(required = false) String stream) {
        if (stream != null) {
            return ResponseEntity.ok(degreeService.getDegreesByStream(stream));
        }
        return ResponseEntity.ok(degreeService.getAllDegrees());
    }

    @GetMapping("/{slug}")
    public ResponseEntity<Degree> getDegree(@PathVariable String slug) {
        return ResponseEntity.ok(degreeService.getDegreeBySlug(slug));
    }
}
