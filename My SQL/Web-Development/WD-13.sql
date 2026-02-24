USE instagram;
CREATE TABLE user9 (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT user9_age_check CHECK (age >= 13),
PRIMARY KEY (id)
);

INSERT INTO user9
(id, age, name, email, followers, following)
VALUES
(1, 14, "adam", "adam@yahoo.in", 123, 145),
(2, 15, "bob", "bob123@gmail.com", 200, 200);

SELECT name, age, followers
FROM user9
ORDER BY followers ASC;

CREATE TABLE post9 (
id INT PRIMARY KEY,
content VARCHAR(100),
user9_id INT,
FOREIGN KEY (user9_id) REFERENCES user9(id)
);