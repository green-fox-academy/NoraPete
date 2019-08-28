CREATE TABLE posts (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(50),
  url VARCHAR(50) NOT NULL,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  score INT DEFAULT 0,
  owner VARCHAR(20) DEFAULT 'null'
);

INSERT INTO posts (id, title, url, score) VALUES 
(25, 'Dear JavaScript', 'http://9gag.com', 791),
(74, 'Crockford', 'http://9gag.com', 567);
