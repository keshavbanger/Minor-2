package com.careerpath.service;

import com.careerpath.model.EntranceExam;
import com.careerpath.repository.EntranceExamRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExamService {
    private final EntranceExamRepository examRepository;

    public List<EntranceExam> getAllExams() {
        return examRepository.findAll();
    }
}
