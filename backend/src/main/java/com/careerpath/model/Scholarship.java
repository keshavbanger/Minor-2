package com.careerpath.model;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "scholarships")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Scholarship {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @Column(name = "provided_by")
    private String providedBy;

    @Enumerated(EnumType.STRING)
    @Column(name = "scholarship_type", nullable = false)
    private ScholarshipType scholarshipType;

    @Column(name = "eligible_streams")
    private String eligibleStreams;

    @Column(name = "eligible_classes")
    private String eligibleClasses;

    @Column(name = "eligible_categories")
    private String eligibleCategories;

    @Enumerated(EnumType.STRING)
    @Column(name = "eligible_gender")
    private EligibleGender eligibleGender = EligibleGender.ALL;

    @Column(name = "min_percentage")
    private Integer minPercentage;

    @Column(name = "family_income_limit")
    private Integer familyIncomeLimit;

    @Column(name = "amount_per_year")
    private Integer amountPerYear;

    @Column(name = "application_start_date")
    private LocalDate applicationStartDate;

    @Column(name = "application_end_date")
    private LocalDate applicationEndDate;

    @Column(name = "official_link")
    private String officialLink;

    private String state;

    @Column(name = "is_central")
    private Boolean isCentral = false;

    public enum ScholarshipType { MERIT, POST_MATRIC, PRE_MATRIC, GIRL_CHILD, MINORITY, SC_ST_OBC, SPORTS, GENERAL }
    public enum EligibleGender { ALL, GIRLS, BOYS }
}
