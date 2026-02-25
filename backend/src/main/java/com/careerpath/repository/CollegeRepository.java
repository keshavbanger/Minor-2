package com.careerpath.repository;

import com.careerpath.model.College;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface CollegeRepository extends JpaRepository<College, Long> {
    List<College> findByState(String state);
    List<College> findByDistrict(String district);
}
