-- Created By Eric -- 
-- Pineland Music School MySQL Database -- 

CREATE DATABASE IF NOT EXISTS Pineland_Music_School;
USE Pineland_Music_School;

CREATE TABLE Teacher (
 Teacher_ID INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(40) NOT NULL,
  LastName VARCHAR(40) NOT NULL,
  Gender enum('Male','Female'),
  Date_of_Birth Date,
  StreetName VARCHAR(30),
  Suburb VARCHAR(30),
  State enum ('QLD', 'VIC', 'NSW','WA','TAS','NT','SA'),
  Postcode INT(4),
  PhoneNumber INT(20),
  Email VARCHAR(40),
  Facebook_ID VARCHAR(40),
  Qualification enum('Diploma','Bachelor','Master'),
  Music_skill VARCHAR(40),
  Laguage_skill VARCHAR(10),
  PRIMARY KEY (Teacher_ID)
  )CHARACTER SET utf8;
  
  INSERT INTO Teacher(FirstName,LastName,Gender,Date_of_Birth,StreetName,Suburb ,State ,Postcode,
  PhoneNumber,Email,Facebook_ID,Qualification,Music_skill,Laguage_skill) 
  VALUES("KA LONG","LEE","Male",20180101,'12 Melbourne st','South Bank','QLD','4102',015382912,'Eric@gmail.com','Ericlkl','Master','Piano Master','Dont know');
  
 INSERT INTO Teacher(FirstName,LastName,Gender,Date_of_Birth,StreetName,Suburb ,State ,Postcode,
  PhoneNumber,Email,Facebook_ID,Qualification,Music_skill,Laguage_skill) 
  VALUES("ZiJun","LU","Female",20170212,'12 Melbourne st','South Bank','QLD','4102',015382912,'Emma@gmail.com','Emmama','Master','Drum Master','Dont know');
  
  CREATE TABLE Student (
  Student_ID INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(40) NOT NULL,
  LastName VARCHAR(40) NOT NULL,
  Gender enum('Male','Female'),
  Date_of_Birth Date,
  StreetName VARCHAR(30),
  Suburb VARCHAR(30),
  State enum ('QLD', 'VIC', 'NSW','WA','TAS','NT','SA'),
  Postcode INT(4),
  PhoneNumber INT(20),
  Email VARCHAR(40),
  Facebook_ID VARCHAR(40),
  Parent_name VARCHAR(40),
  Parent_phone_number INT(40),
  is_old_student Bool,
  PRIMARY KEY (Student_ID)
  )CHARACTER SET utf8;
  
INSERT INTO Student(FirstName,LastName,Gender,Date_of_Birth,StreetName,Suburb ,State ,Postcode,
  PhoneNumber,Email,Facebook_ID,Parent_name,Parent_phone_number,is_old_student) 
  VALUES("ZiJun","LU","Female",20170212,'12 Melbourne st','South Bank','QLD','4102',015382912,'Emma@gmail.com','Emmama','Mother',01283921923,False);
  
INSERT INTO Student(FirstName,LastName,Gender,Date_of_Birth,StreetName,Suburb ,State ,Postcode,
  PhoneNumber,Email,Facebook_ID,Parent_name,Parent_phone_number,is_old_student) 
  VALUES("Eric","Lee","Male",20000101,'12 Melbourne st','South Bank','QLD','4102',015382912,'Eric@gmail.com','Ericicicic','Father',2382361,True);
  
CREATE TABLE Lesson (
  Lesson_ID INT NOT NULL AUTO_INCREMENT,
  Lesson_Name VARCHAR(40),
  Lesson_Price INT(10),
  Lesson_Duration  enum('30mins','60mins'),
  Instrument_type VARCHAR(10),
  Teacher_ID INT NOT NULL,
  PRIMARY KEY (Lesson_ID),
  FOREIGN KEY (Teacher_ID) REFERENCES Teacher(Teacher_ID)
  )CHARACTER SET utf8;
  
  INSERT INTO Lesson(Lesson_Name,Lesson_Price,Lesson_Duration,Instrument_type,Teacher_ID) 
  VALUES("Piano01",300,'30mins','Piano',01);
  INSERT INTO Lesson(Lesson_Name,Lesson_Price,Lesson_Duration,Instrument_type,Teacher_ID) 
  VALUES("Drum01",300,'30mins','Piano',02);
  
  CREATE TABLE Register(
  Register_ID INT NOT NULL AUTO_INCREMENT,
  Student_ID INT NOT NULL,
  Lesson_ID INT NOT NULL,
  Start_date Date,
  End_date Date,
  PRIMARY KEY (Register_ID),
  FOREIGN KEY (Student_ID) REFERENCES Student (Student_ID),
  FOREIGN KEY (Lesson_ID) REFERENCES Lesson(Lesson_ID)
  )CHARACTER SET utf8;
  
 INSERT INTO Register(Student_ID,Lesson_ID,Start_date,End_date) 
  VALUES(1,1,20180103,20180202);
 INSERT INTO Register(Student_ID,Lesson_ID,Start_date,End_date) 
  VALUES(2,1,20180104,20180204);
  
  CREATE TABLE Instrument(
  Instrument_ID INT NOT NULL AUTO_INCREMENT,
  Instrument_Name VARCHAR(40),
  Instrument_Type VARCHAR(40),
  Instrument_Condition enum('New','Excellent','good','repair','discard'),
  Hire_cost INT(10),
  PRIMARY KEY (Instrument_ID)
  )CHARACTER SET utf8;
  
  INSERT INTO Instrument(Instrument_Name,Instrument_Type,Instrument_Condition,Hire_cost) 
  VALUES("Violin01","Violin","Excellent",100);
  INSERT INTO Instrument(Instrument_Name,Instrument_Type,Instrument_Condition,Hire_cost) 
  VALUES("Guitar01","Guitar","good",200);
  
  CREATE TABLE Hire_Instrument(
  Hire_ID INT NOT NULL AUTO_INCREMENT,
  Student_ID INT NOT NULL,
  Instrument_ID INT NOT NULL,
  start_date DATE,
  end_date DATE,
  PRIMARY KEY (Hire_ID),
  FOREIGN KEY (Student_ID) REFERENCES Student (Student_ID),
  FOREIGN KEY (Instrument_ID) REFERENCES Instrument(Instrument_ID)
  )CHARACTER SET utf8;
  
  INSERT INTO Hire_Instrument(Student_ID,Instrument_ID,start_date,end_date) 
  VALUES(1,1,20180101,20180201);
  INSERT INTO Hire_Instrument(Student_ID,Instrument_ID,start_date,end_date) 
  VALUES(2,2,20180101,20180201);