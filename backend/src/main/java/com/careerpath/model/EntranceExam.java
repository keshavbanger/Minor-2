package com.careerpath.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "entrance_exams")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EntranceExam {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(name = "short_name", nullable = false)
    private String shortName;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "conducting_body")
    private String conductingBody;

    @Enumerated(EnumType.STRING)
    @Column(name = "exam_level", nullable = false)
    private ExamLevel examLevel;

    @Column(name = "streams_applicable")
    private String streamsApplicable;

    @Enumerated(EnumType.STRING)
    @Column(name = "eligibility_class")
    private EligibilityClass eligibilityClass;

    @Column(name = "min_percentage")
    private Integer minPercentage;

    @Enumerated(EnumType.STRING)
    @Column(name = "exam_mode")
    private ExamMode examMode = ExamMode.ONLINE;

    @Column(name = "application_start_date")
    private LocalDate applicationStartDate;

    @Column(name = "application_end_date")
    private LocalDate applicationEndDate;

    @Column(name = "exam_date")
    private LocalDate examDate;

    @Column(name = "result_date")
    private LocalDate resultDate;

    @Column(name = "official_website")
    private String officialWebsite;

    @Column(name = "application_link")
    private String applicationLink;

    @Column(name = "exam_fee")
    private Integer examFee;

    public enum ExamLevel { NATIONAL, STATE, UNIVERSITY }
    public enum EligibilityClass { CLASS_10, CLASS_12, GRADUATE }
    public enum ExamMode { ONLINE, OFFLINE, BOTH }
}
