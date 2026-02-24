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

CREATE TABLE post (
id INT PRIMARY KEY,
content VARCHAR(100),
user4_id INT,
FOREIGN KEY (user4_id) REFERENCES user4(id)
);