package com.careerpath.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "quiz_results")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QuizResult {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "science_score", nullable = false)
    private Integer scienceScore;

    @Column(name = "commerce_score", nullable = false)
    private Integer commerceScore;

    @Column(name = "arts_score", nullable = false)
    private Integer artsScore;

    @Column(name = "recommended_stream", nullable = false)
    private String recommendedStream;

    @Column(name = "match_percentage", nullable = false)
    private Integer matchPercentage;

    @Column(name = "answers_json", columnDefinition = "TEXT")
    private String answersJson;

    @Column(name = "taken_at")
    private LocalDateTime takenAt = LocalDateTime.now();
}
