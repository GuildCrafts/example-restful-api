CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE topics (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  posted_at TIMESTAMP DEFAULT now() NOT NULL,
  posted_by_id INTEGER NOT NULL, -- foreign key for users
  topic_id INTEGER NOT NULL -- foreign key for topics
);

CREATE TABLE answers (
  id SERIAL PRIMARY KEY,
  text TEXT NOT NULL,
  posted_at TIMESTAMP DEFAULT now() NOT NULL,
  question_id INTEGER NOT NULL, -- foreign key for questions
  posted_by_id INTEGER NOT NULL -- foreign key for users
);

CREATE TABLE followers (
  id SERIAL PRIMARY KEY,
  question_id INTEGER NOT NULL, -- foreign key for questions
  follower_id INTEGER NOT NULL, -- foreign key for followers
  followed_at TIMESTAMP DEFAULT now() NOT NULL
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  answer_id INTEGER NOT NULL, -- foreign key for answers
  voter_id INTEGER NOT NULL, -- foreign key for voters
  value INTEGER NOT NULL DEFAULT 1
);
