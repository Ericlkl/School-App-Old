-- Created By Eric -- 
-- Pineland Music School MySQL Database -- 

CREATE DATABASE IF NOT EXISTS Pineland_Music_School;
USE Pineland_Music_School;

CREATE TABLE Teacher (
 Teacher_ID INT,
  FirstName VARCHAR(40),
  LastName VARCHAR(40),
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
  
  CREATE TABLE Student (
  Student_ID INT,
  FirstName VARCHAR(40),
  LastName VARCHAR(40),
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
  
CREATE TABLE Lesson (
  Lesson_ID INT,
  Lesson_Name VARCHAR(40),
  Lesson_Price INT(10),
  Lesson_Duration  enum('30mins','60mins'),
  Instrument_type VARCHAR(10),
  PRIMARY KEY (Lesson_ID)
  )CHARACTER SET utf8;
  
  CREATE TABLE Register(
  Register_ID INT,
  Student_ID INT,
  Teacher_ID INT,
  Start_date Date,
  End_date Date,
  PRIMARY KEY (Register_ID),
  FOREIGN KEY (Student_ID) REFERENCES Student (Student_ID),
  FOREIGN KEY (Teacher_ID) REFERENCES Teacher(Teacher_ID)
  )CHARACTER SET utf8;
  
  CREATE TABLE Instrument(
  Instrument_ID INT,
  Instrument_Name VARCHAR(40),
  Instrument_Type VARCHAR(40),
  Instrument_Condition enum('New','Excellent','good','repair','discard'),
  Hire_cost INT(10),
  PRIMARY KEY (Instrument_ID)
  )CHARACTER SET utf8;
  
  CREATE TABLE Hire_Instrument(
  Hire_ID INT,
  Student_ID INT,
  Instrument_ID INT,
  start_date DATE,
  end_date DATE,
  PRIMARY KEY (Hire_ID),
  FOREIGN KEY (Student_ID) REFERENCES Student (Student_ID),
  FOREIGN KEY (Instrument_ID) REFERENCES Instrument(Instrument_ID)
  )CHARACTER SET utf8;