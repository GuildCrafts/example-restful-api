insert into topics (id, name) values
  (1, 'Databases'),
  (2, 'Finance'),
  (3, 'Mathematics'),
  (4, 'Education'),
  (5, 'Law'),
  (6, 'Science'),
  (7, 'Business'),
  (8, 'Marketing'),
  (9, 'Government'),
  (10, 'Research'),
  (11, 'Accounting'),
  (12, 'Journalism'),
  (13, 'IT'),
  (14, 'Programming'),
  (15, 'Machine Learning'),
  (16, 'Sales'),
  (17, 'Chemistry'),
  (18, 'English'),
  (19, 'Engineering'),
  (20, 'Spanish');

--- Make sure the sequence starts at the correct ID
ALTER SEQUENCE "topics_id_seq" RESTART WITH 21;
