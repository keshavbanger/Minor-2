package com.careerpath.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "degree_subjects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DegreeSubject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "degree_id", nullable = false)
    private Degree degree;

    @Column(nullable = false)
    private Integer semester;

    @Column(name = "year_number", nullable = false)
    private Integer yearNumber;

    @Column(name = "subject_name", nullable = false)
    private String subjectName;

    @Enumerated(EnumType.STRING)
    @Column(name = "subject_type")
    private SubjectType subjectType = SubjectType.CORE;

    public enum SubjectType { CORE, ELECTIVE, LAB, PROJECT }
}
