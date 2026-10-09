-- ==========================================
-- EduPulse Seed Data Script (PostgreSQL)
-- Demo Accounts:
-- Student: student@edupulse.edu / Password123!
-- Teacher: teacher@edupulse.edu / Password123!
-- Admin:   admin@edupulse.edu   / Password123!
-- ==========================================

-- Standardized bcrypt hashes (for 'Password123!')
-- $2a$10$abcdefghijklmnopqrstuu (represented symbolically for seed)

INSERT INTO users (id, full_name, email, password_hash, role, avatar_url) VALUES
(1, 'Alex Rivers', 'student@edupulse.edu', '$2a$12$R.u77vS4Z3N3jO4T8/7sE.yQ7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7', 'student', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150'),
(2, 'Dr. Aris Thorne', 'teacher@edupulse.edu', '$2a$12$R.u77vS4Z3N3jO4T8/7sE.yQ7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7', 'teacher', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150'),
(3, 'Elena Rostova', 'admin@edupulse.edu', '$2a$12$R.u77vS4Z3N3jO4T8/7sE.yQ7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7Q7', 'admin', 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150')
ON CONFLICT (id) DO NOTHING;

INSERT INTO students (id, user_id, roll_number, department, semester, cgpa, attendance_pct, skills, interests) VALUES
(1, 1, '23BCE1042', 'Computer Science & Engineering', 4, 3.82, 94.50, 
 ARRAY['Python', 'C++', 'Data Structures', 'SQL', 'HTML/CSS'], 
 ARRAY['Machine Learning', 'Open Source', 'Competitive Programming'])
ON CONFLICT (id) DO NOTHING;

INSERT INTO teachers (id, user_id, employee_id, department, designation) VALUES
(1, 2, 'EMP-CS-804', 'Computer Science & Engineering', 'Associate Professor')
ON CONFLICT (id) DO NOTHING;

INSERT INTO subjects (id, code, name, department, credits, teacher_id) VALUES
(101, 'CS201', 'Data Structures & Algorithms', 'Computer Science & Engineering', 4, 1),
(102, 'CS204', 'Python for Intelligent Systems', 'Computer Science & Engineering', 3, 1),
(103, 'MATH301', 'Discrete Mathematics & Probability', 'Computer Science & Engineering', 4, 1),
(104, 'CS302', 'Computer Networks & Distributed Systems', 'Computer Science & Engineering', 3, 1)
ON CONFLICT (id) DO NOTHING;

INSERT INTO enrollments (student_id, subject_id) VALUES
(1, 101), (1, 102), (1, 103), (1, 104)
ON CONFLICT DO NOTHING;

INSERT INTO assessment_records (student_id, subject_id, topic_name, score_pct, assessment_type) VALUES
-- Data Structures
(1, 101, 'Arrays & Vectors', 88.5, 'Quiz 1'),
(1, 101, 'Linked Lists', 82.0, 'Quiz 2'),
(1, 101, 'Stacks & Queues', 75.5, 'Midterm'),
(1, 101, 'Trees & Binary Search Trees', 62.0, 'Assignment 2'),
(1, 101, 'Graphs & Dijkstra Algorithm', 55.0, 'Quiz 3'),

-- Python
(1, 102, 'Basic Syntax & Functions', 95.0, 'Quiz 1'),
(1, 102, 'OOP Concepts', 90.0, 'Assignment 1'),
(1, 102, 'Numpy & DataFrames', 88.0, 'Midterm'),
(1, 102, 'Async Programming', 78.0, 'Quiz 2'),

-- Discrete Math
(1, 103, 'Set Theory & Logic', 70.0, 'Quiz 1'),
(1, 103, 'Combinatorics', 64.0, 'Midterm'),
(1, 103, 'Probability Distributions', 58.0, 'Assignment 1'),

-- Computer Networks
(1, 104, 'OSI Layer Model', 80.0, 'Quiz 1'),
(1, 104, 'TCP/IP Protocol Stack', 74.0, 'Midterm'),
(1, 104, 'Subnetting & Routing', 68.0, 'Quiz 2');

INSERT INTO assignments (id, subject_id, teacher_id, title, description, topic, max_marks, difficulty, deadline) VALUES
(1, 101, 1, 'Implementation of AVL Trees & Balancing', 'Write a C++ class implementing an AVL tree with self-balancing insertions, deletions, and tree traversal functions.', 'Trees & Binary Search Trees', 100, 'hard', NOW() + INTERVAL '3 days'),
(2, 102, 1, 'Predictive Analytics Pipeline in Pandas', 'Build a Python script that processes CSV performance records, handles missing data, and computes moving average scores.', 'Numpy & DataFrames', 50, 'medium', NOW() + INTERVAL '5 days'),
(3, 103, 1, 'Probability Distribution Problem Set', 'Solve problems 1-15 on Poisson and Normal distributions. Show step-by-step proofs.', 'Probability Distributions', 30, 'medium', NOW() - INTERVAL '1 day')
ON CONFLICT (id) DO NOTHING;

INSERT INTO submissions (assignment_id, student_id, submission_text, marks_obtained, teacher_feedback, ai_preliminary_feedback, status) VALUES
(3, 1, 'PDF Submission uploaded: prob_dist_alex.pdf', 24.5, 'Good attempt. Check standard deviation formula on question 8.', 'Mathematical reasoning is correct. Notation in Q8 missing normalization factor.', 'graded')
ON CONFLICT DO NOTHING;

INSERT INTO anonymous_feedback (subject_id, category, rating, feedback_text, sentiment, extracted_topics) VALUES
(101, 'Teaching pace', 3, 'The pace during Graph algorithms (Dijkstra/BFS) was a bit too fast. More worked step-by-step examples on the board would help greatly.', 'negative', ARRAY['Graph algorithms', 'Pace', 'Board Examples']),
(101, 'Study material', 5, 'The lecture notes on Trees and Binary Heaps were extremely clear and helpful for revision!', 'positive', ARRAY['Trees', 'Lecture Notes']),
(102, 'Assignments', 4, 'Practical code assignments are engaging and well structured. Would love more edge case unit tests in the specification.', 'positive', ARRAY['Code Assignments', 'Unit Tests']),
(103, 'Course difficulty', 2, 'Probability concepts feel very abstract. Can we have extra tutorial sessions or problem-solving hours before exams?', 'negative', ARRAY['Probability', 'Tutorial Sessions', 'Difficulty']);

INSERT INTO opportunities (id, title, organization, category, description, eligibility, required_skills, deadline, is_online, location, application_url, is_verified) VALUES
(1, 'Global AI & EdTech Hackathon 2026', 'OpenAI & EduPulse Labs', 'Hackathons', 'Build innovative AI solutions targeting learning gap diagnosis, adaptive tutoring, and classroom analytics.', 'Undergraduate Students in Computer Science or Data Science', ARRAY['Python', 'C++', 'AI/ML', 'API Integration'], NOW() + INTERVAL '14 days', true, 'Remote / Online', 'https://edupulse.edu/hackathons/ai-2026', true),
(2, 'Summer Research Fellowship in Graph Neural Networks', 'Institute of Advanced Computing', 'Research opportunities', 'Work alongside leading researchers on optimizing graph tree traversals and dynamic neural architectures.', '3rd and 4th Year CSE/ECE Students with 3.5+ CGPA', ARRAY['Data Structures', 'C++', 'Python', 'Machine Learning'], NOW() + INTERVAL '20 days', false, 'Boston, MA (Stipend provided)', 'https://iac.edu/fellowships/gnn', true),
(3, 'National Student Software Engineering Challenge', 'TechInnovators Guild', 'Competitions', 'Compete against 500+ university teams in building scalable microservices and algorithm optimization.', 'Enrolled University Students', ARRAY['C++', 'SQL', 'Data Structures'], NOW() + INTERVAL '7 days', true, 'Online', 'https://techinnovators.org/challenge', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO notifications (user_id, title, message, type) VALUES
(1, 'Assignment Deadline Approaching', 'AVL Trees & Balancing assignment is due in 3 days.', 'warning'),
(1, 'New Opportunity Match!', 'You matched 92% with Global AI & EdTech Hackathon 2026.', 'success'),
(1, 'New Feedback Received', 'Dr. Aris Thorne graded Probability Distribution Problem Set: 24.5/30.', 'info');

INSERT INTO announcements (author_id, title, content, target_role) VALUES
(3, 'Welcome to EduPulse Spring Semester!', 'EduPulse AI Platform is live! Explore your performance analytics, generate AI study plans, and discover verified hackathons and internships.', 'all'),
(2, 'Midterm Review & Help Sessions', 'Extra office hours for Data Structures (Graphs & Trees) scheduled for this Thursday at 4 PM in Lab 3.', 'student');
