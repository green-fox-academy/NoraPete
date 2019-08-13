CREATE TABLE users(
  uID INT(11) PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(128)
);

CREATE TABLE tasks(
  uID INT(11) NOT NULL,
  description VARCHAR(255) NOT NULL DEFAULT "Take a break"
);

INSERT INTO users (name) VALUES ("John Doe"), ("Jane Doe");

INSERT INTO tasks (uID, description) VALUES (1, "walk the dog"), (1, "feed the cat"), (1, "have lunch");

INSERT INTO tasks (uID) VALUES (2);