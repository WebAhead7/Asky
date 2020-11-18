BEGIN;

DROP TABLE IF EXISTS questions, answers CASCADE;

CREATE TABLE questions
 (
  id SERIAL PRIMARY KEY,
  usernameQ VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  question TEXT
);

CREATE TABLE answers
 (
  id SERIAL PRIMARY KEY,
  usernameA VARCHAR(255),
  answer_content TEXT,
  question_id INTEGER REFERENCES questions(id)
);

INSERT INTO questions (usernameQ, email,question) VALUES
  ('Sery1976', 'example@hotmail.com', 'how are you????'),
  ('Notne1991', 'ex@gmail.com', 'whats your name?????'),
  ('Moull1990', 'abcd@hotmail.com', 'how old are you????');

INSERT INTO answers (usernameA, answer_content,question_id) VALUES
  ('john','Announcing of invitation principles in.', 1),
  ('mark','Announcing of invitation principles in.', 1),
  ('ben','Announcing of invitation principles in.', 1),
    ('muhammad','Announcing of invitation principles in.', 2),
  ('ahmad','Announcing of invitation principles in.', 3);

COMMIT;