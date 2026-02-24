CREATE TABLE IF NOT EXISTS student (
  rollno INT PRIMARY KEY,
  name VARCHAR(30),
  city VARCHAR(30),
  marks int
  );
  
  INSERT INTO student
  (rollno, name, city, marks)
  VALUES
  (110, "adam", "Delhi", 76),
  (108, "bob", "Mumbai", 65),
  (124, "casey", "Pune", 94),
  (112, "duke", "Pune", 80);
  
  SELECT * FROM student;
  SELECT * FROM student
  WHERE marks >75;
  
  