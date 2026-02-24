CREATE DATABASE IF NOT EXISTS college;
CREATE DATABASE IF NOT EXISTS instagram;

USE instagram;
CREATE TABLE user4 (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT user4_age_check CHECK (age >= 13),
PRIMARY KEY (id)
);

INSERT INTO user4
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200),
(3, 16, "casey", "casey@email.com", 300, 306),
(4, 17, "donald", "donald@gmail.com", 200, 105);

SELECT id, name, age FROM user4;

CREATE TABLE post (
id INT PRIMARY KEY,
content VARCHAR(100),
user4_id INT,
FOREIGN KEY (user4_id) REFERENCES user4(id)
);