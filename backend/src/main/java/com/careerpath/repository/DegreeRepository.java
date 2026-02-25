package com.careerpath.repository;

import com.careerpath.model.Degree;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface DegreeRepository extends JpaRepository<Degree, Long> {
    Optional<Degree> findBySlug(String slug);
    List<Degree> findByStream(Degree.StreamType stream);
    List<Degree> findByIsNicheTrue();
}
