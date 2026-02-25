package com.careerpath.repository;

import com.careerpath.model.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ScholarshipRepository extends JpaRepository<Scholarship, Long> {
    List<Scholarship> findByScholarshipType(Scholarship.ScholarshipType scholarshipType);
}
