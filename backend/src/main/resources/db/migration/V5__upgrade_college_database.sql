-- UPGRADE COLLEGE DATABASE TO COMPREHENSIVE DATASET
-- Mapping from COLLEGES_DATA (Frontend) to MySQL Schema

INSERT INTO colleges (name, state, district, type, nirf_ranking, naac_grade, website, streams_offered, annual_fees_min, annual_fees_max, city) VALUES
('Indian Institute of Technology (IIT) Delhi', 'Delhi', 'New Delhi', 'GOVERNMENT', 2, 'A++', 'https://home.iitd.ac.in', 'SCIENCE', 220000, 220000, 'New Delhi'),
('Indian Institute of Technology (IIT) Bombay', 'Maharashtra', 'Mumbai', 'GOVERNMENT', 3, 'A++', 'https://www.iitb.ac.in', 'SCIENCE', 210000, 210000, 'Mumbai'),
('Maulana Azad National Institute of Technology (MANIT)', 'Madhya Pradesh', 'Bhopal', 'GOVERNMENT', 80, 'A', 'https://www.manit.ac.in', 'SCIENCE', 145000, 145000, 'Bhopal'),
('Birla Institute of Technology & Science (BITS)', 'Rajasthan', 'Pilani', 'AUTONOMOUS', 25, 'A', 'https://www.bits-pilani.ac.in', 'SCIENCE', 520000, 520000, 'Pilani'),
('Vellore Institute of Technology (VIT)', 'Tamil Nadu', 'Vellore', 'AUTONOMOUS', 11, 'A++', 'https://vit.ac.in', 'SCIENCE', 198000, 198000, 'Vellore'),
('All India Institute of Medical Sciences (AIIMS)', 'Delhi', 'New Delhi', 'GOVERNMENT', 1, 'A++', 'https://www.aiims.edu', 'SCIENCE', 1628, 1628, 'New Delhi'),
('AIIMS Bhopal', 'Madhya Pradesh', 'Bhopal', 'GOVERNMENT', 25, 'A', 'https://www.aiimsbhopal.edu.in', 'SCIENCE', 1800, 1800, 'Bhopal'),
('Govt. Holkar Science College', 'Madhya Pradesh', 'Indore', 'GOVERNMENT', 150, 'A', 'https://collegeholkar.org', 'SCIENCE', 12000, 12000, 'Indore'),
('St. Stephen''s College', 'Delhi', 'New Delhi', 'GOVERNMENT', 4, 'A++', 'https://ststephens.edu', 'SCIENCE, ARTS', 45000, 45000, 'New Delhi'),
('Shri Ram College of Commerce (SRCC)', 'Delhi', 'New Delhi', 'GOVERNMENT', 1, 'A++', 'https://www.srcc.edu', 'COMMERCE', 30000, 30000, 'New Delhi'),
('Christ University', 'Karnataka', 'Bangalore', 'AUTONOMOUS', 60, 'A+', 'https://christuniversity.in', 'COMMERCE', 210000, 210000, 'Bangalore'),
('National Law School of India University (NLSIU)', 'Karnataka', 'Bangalore', 'GOVERNMENT', 1, 'A++', 'https://www.nls.ac.in', 'ARTS', 325000, 325000, 'Bangalore'),
('National Law Institute University (NLIU)', 'Madhya Pradesh', 'Bhopal', 'GOVERNMENT', 15, 'A', 'https://www.nliu.ac.in', 'ARTS', 245000, 245000, 'Bhopal'),
('Lady Shri Ram College for Women (LSR)', 'Delhi', 'New Delhi', 'GOVERNMENT', 5, 'A++', 'https://lsr.edu.in', 'ARTS', 18000, 18000, 'New Delhi'),
('Banaras Hindu University (BHU)', 'Uttar Pradesh', 'Varanasi', 'GOVERNMENT', 6, 'A', 'https://www.bhu.ac.in', 'SCIENCE, COMMERCE, ARTS', 8000, 8000, 'Varanasi');
