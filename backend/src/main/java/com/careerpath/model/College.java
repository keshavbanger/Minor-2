package com.careerpath.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "colleges")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class College {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "college_code")
    private String collegeCode;

    @Column(nullable = false)
    private String name;

    @Column(name = "short_name")
    private String shortName;

    @Column(nullable = false)
    private String state;

    @Column(nullable = false)
    private String district;

    private String city;

    @Column(columnDefinition = "TEXT")
    private String address;

    private String phone;
    private String email;
    private String website;

    @Column(name = "established_year")
    private Integer establishedYear;

    @Enumerated(EnumType.STRING)
    private CollegeType type = CollegeType.GOVERNMENT;

    @Enumerated(EnumType.STRING)
    private GenderClassification gender = GenderClassification.COED;

    @Column(name = "nirf_ranking")
    private Integer nirfRanking;

    @Column(name = "naac_grade")
    private String naacGrade;

    @Column(name = "hostel_available")
    private Boolean hostelAvailable = false;

    @Column(name = "hostel_capacity")
    private Integer hostelCapacity;

    @Column(name = "placement_rating")
    private Double placementRating;

    @Column(name = "sports_ground")
    private Boolean sportsGround = false;

    private Boolean library = true;

    @Column(name = "computer_lab")
    private Boolean computerLab = true;

    @Column(name = "science_lab")
    private Boolean scienceLab = false;

    @Column(name = "streams_offered")
    private String streamsOffered;

    @Column(name = "annual_fees_min")
    private Integer annualFeesMin;

    @Column(name = "annual_fees_max")
    private Integer annualFeesMax;

    @Column(name = "total_seats")
    private Integer totalSeats;

    public enum CollegeType { GOVERNMENT, GOVERNMENT_AIDED, AUTONOMOUS }
    public enum GenderClassification { COED, GIRLS, BOYS }
}
