USE instagram;
CREATE TABLE users (
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT,
CONSTRAINT age_check CHECK (age >= 13)
);