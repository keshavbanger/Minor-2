package com.careerpath.repository;

import com.careerpath.model.EntranceExam;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface EntranceExamRepository extends JpaRepository<EntranceExam, Long> {
    List<EntranceExam> findByExamLevel(EntranceExam.ExamLevel examLevel);
}
