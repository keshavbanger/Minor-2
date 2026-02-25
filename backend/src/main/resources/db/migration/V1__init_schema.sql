-- USERS TABLE
CREATE TABLE users (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  mobile VARCHAR(10),
  password_hash VARCHAR(255),
  google_id VARCHAR(100),
  auth_provider ENUM('LOCAL', 'GOOGLE') DEFAULT 'LOCAL',
  current_class ENUM('CLASS_10', 'CLASS_12', 'PASSED') NOT NULL,
  stream VARCHAR(20),
  district VARCHAR(100),
  state VARCHAR(100),
  role ENUM('STUDENT', 'ADMIN') DEFAULT 'STUDENT',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- QUIZ RESULTS TABLE
CREATE TABLE quiz_results (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  science_score INT NOT NULL,
  commerce_score INT NOT NULL,
  arts_score INT NOT NULL,
  recommended_stream VARCHAR(20) NOT NULL,
  match_percentage INT NOT NULL,
  answers_json TEXT,
  taken_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- DEGREES TABLE
CREATE TABLE degrees (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(200) NOT NULL,
  stream ENUM('SCIENCE', 'COMMERCE', 'ARTS') NOT NULL,
  duration VARCHAR(50) NOT NULL,
  duration_years DECIMAL(3,1) NOT NULL,
  description TEXT,
  eligibility TEXT,
  entrance_exams VARCHAR(200),
  min_salary INT,
  max_salary INT,
  category VARCHAR(100),
  is_niche BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DEGREE SUBJECTS TABLE
CREATE TABLE degree_subjects (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  degree_id BIGINT NOT NULL,
  semester INT NOT NULL,
  year_number INT NOT NULL,
  subject_name VARCHAR(200) NOT NULL,
  subject_type ENUM('CORE', 'ELECTIVE', 'LAB', 'PROJECT') DEFAULT 'CORE',
  FOREIGN KEY (degree_id) REFERENCES degrees(id) ON DELETE CASCADE
);

-- CAREERS TABLE
CREATE TABLE careers (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  degree_id BIGINT NOT NULL,
  job_title VARCHAR(200) NOT NULL,
  industry VARCHAR(100),
  description VARCHAR(300),
  avg_min_salary INT,
  avg_max_salary INT,
  growth_level ENUM('LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH') DEFAULT 'MEDIUM',
  sector ENUM('GOVERNMENT', 'PRIVATE', 'BOTH', 'SELF') DEFAULT 'BOTH',
  FOREIGN KEY (degree_id) REFERENCES degrees(id) ON DELETE CASCADE
);

-- COLLEGES TABLE
CREATE TABLE colleges (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  college_code VARCHAR(50),
  name VARCHAR(300) NOT NULL,
  short_name VARCHAR(100),
  state VARCHAR(100) NOT NULL,
  district VARCHAR(100) NOT NULL,
  city VARCHAR(100),
  address TEXT,
  phone VARCHAR(15),
  email VARCHAR(100),
  website VARCHAR(200),
  established_year INT,
  type ENUM('GOVERNMENT', 'GOVERNMENT_AIDED', 'AUTONOMOUS') DEFAULT 'GOVERNMENT',
  gender ENUM('COED', 'GIRLS', 'BOYS') DEFAULT 'COED',
  nirf_ranking INT,
  naac_grade VARCHAR(5),
  hostel_available BOOLEAN DEFAULT FALSE,
  hostel_capacity INT,
  placement_rating DECIMAL(2,1),
  sports_ground BOOLEAN DEFAULT FALSE,
  library BOOLEAN DEFAULT TRUE,
  computer_lab BOOLEAN DEFAULT TRUE,
  science_lab BOOLEAN DEFAULT FALSE,
  streams_offered VARCHAR(100),
  annual_fees_min INT,
  annual_fees_max INT,
  total_seats INT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- COLLEGE COURSES TABLE
CREATE TABLE college_courses (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  college_id BIGINT NOT NULL,
  degree_id BIGINT NOT NULL,
  seats INT,
  annual_fees INT,
  admission_type ENUM('MERIT', 'ENTRANCE', 'BOTH') DEFAULT 'MERIT',
  FOREIGN KEY (college_id) REFERENCES colleges(id) ON DELETE CASCADE,
  FOREIGN KEY (degree_id) REFERENCES degrees(id) ON DELETE CASCADE
);

-- ENTRANCE EXAMS TABLE
CREATE TABLE entrance_exams (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  short_name VARCHAR(50) NOT NULL,
  description TEXT,
  conducting_body VARCHAR(200),
  exam_level ENUM('NATIONAL', 'STATE', 'UNIVERSITY') NOT NULL,
  streams_applicable VARCHAR(100),
  eligibility_class ENUM('CLASS_10', 'CLASS_12', 'GRADUATE'),
  min_percentage INT,
  exam_mode ENUM('ONLINE', 'OFFLINE', 'BOTH') DEFAULT 'ONLINE',
  application_start_date DATE,
  application_end_date DATE,
  exam_date DATE,
  result_date DATE,
  official_website VARCHAR(200),
  application_link VARCHAR(200),
  exam_fee INT,
  is_active BOOLEAN DEFAULT TRUE,
  academic_year VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SCHOLARSHIPS TABLE
CREATE TABLE scholarships (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  description TEXT,
  provided_by VARCHAR(200),
  scholarship_type ENUM('MERIT', 'POST_MATRIC', 'PRE_MATRIC', 
    'GIRL_CHILD', 'MINORITY', 'SC_ST_OBC', 'SPORTS', 'GENERAL') NOT NULL,
  eligible_streams VARCHAR(100),
  eligible_classes VARCHAR(50),
  eligible_categories VARCHAR(100),
  eligible_gender ENUM('ALL', 'GIRLS', 'BOYS') DEFAULT 'ALL',
  min_percentage INT,
  family_income_limit INT,
  amount_per_year INT,
  application_start_date DATE,
  application_end_date DATE,
  official_link VARCHAR(300),
  state VARCHAR(100),
  is_central BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE
);

-- SAVED DEGREES TABLE
CREATE TABLE saved_degrees (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  degree_id BIGINT NOT NULL,
  saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_save_degree (user_id, degree_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (degree_id) REFERENCES degrees(id) ON DELETE CASCADE
);

-- SAVED COLLEGES TABLE
CREATE TABLE saved_colleges (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT NOT NULL,
  college_id BIGINT NOT NULL,
  saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_save_college (user_id, college_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (college_id) REFERENCES colleges(id) ON DELETE CASCADE
);

-- FEEDBACK TABLE
CREATE TABLE feedback (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT,
  name VARCHAR(100),
  email VARCHAR(100),
  user_type ENUM('STUDENT', 'PARENT', 'TEACHER', 'OTHER'),
  source VARCHAR(100),
  quiz_rating INT,
  improvement_text TEXT,
  other_feedback TEXT,
  submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

-- ADMIN AUDIT LOG TABLE
CREATE TABLE admin_audit_log (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  admin_id BIGINT NOT NULL,
  action VARCHAR(100),
  entity_type VARCHAR(50),
  entity_id BIGINT,
  old_value TEXT,
  new_value TEXT,
  performed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES users(id)
);
