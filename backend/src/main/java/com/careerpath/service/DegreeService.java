package com.careerpath.service;

import com.careerpath.model.Degree;
import com.careerpath.repository.DegreeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DegreeService {

    private final DegreeRepository degreeRepository;

    public List<Degree> getAllDegrees() {
        return degreeRepository.findAll();
    }

    public List<Degree> getDegreesByStream(String stream) {
        return degreeRepository.findByStream(Degree.StreamType.valueOf(stream.toUpperCase()));
    }

    public Degree getDegreeBySlug(String slug) {
        return degreeRepository.findBySlug(slug).orElseThrow();
    }
}
