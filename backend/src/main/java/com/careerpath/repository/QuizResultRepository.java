package com.careerpath.repository;

import com.careerpath.model.QuizResult;
import com.careerpath.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface QuizResultRepository extends JpaRepository<QuizResult, Long> {
    List<QuizResult> findByUser(User user);
}
