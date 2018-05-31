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
  
CREATE TABLE Courses (
  iD INT NOT NULL AUTO_INCREMENT,
  CourseName VARCHAR(255) NOT NULL,
  Description VARCHAR(255) NOT NULL,
  Requirement VARCHAR(255) NOT NULL,
  TutionFee  int(11) NOT NULL,
  Period varchar(255) NOT NULL,
  Time varchar(255)  NOT NULL,
  Day varchar(255)  NOT NULL,
  NumbersOfStudent int(11) NOT NULL,
  Instrument VARCHAR(255) NOT NULL,
  Teacher varchar(255) NOT NULL,
  Image_URL varchar(255) NOT NULL,
  PRIMARY KEY (iD),
  FOREIGN KEY (Teacher) REFERENCES Teacher(name)
  )CHARACTER SET utf8;

CREATE TABLE Event (
  id INT NOT NULL AUTO_INCREMENT,
  EventName VARCHAR(255) NOT NULL,
  Tag VARCHAR(255) NOT NULL,
  Company VARCHAR(255) NOT NULL,
  Description varchar(255) NOT NULL,
  Instrument varchar(255) NOT NULL,
  Place varchar(255)  NOT NULL,
  Time varchar(255)  NOT NULL,
  Date varchar(255) NOT NULL,
  Image_URL VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  )CHARACTER SET utf8;

  
  CREATE TABLE Instruments (
  id INT NOT NULL AUTO_INCREMENT,
  InstrumentName VARCHAR(255) NOT NULL,
  Status enum('New','Excellent','Good','Repair','Discard') NOT NULL,
  Cost int(11) NOT NULL,
  Description varchar(255) NOT NULL,
  InStock int(11) NOT NULL,
  Image_URL VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  )CHARACTER SET utf8;

  CREATE TABLE Questions (
  id INT NOT NULL AUTO_INCREMENT,
  FullName VARCHAR(255) NOT NULL,
  Email varchar(255) NOT NULL,
  PhoneNumber int(11) NOT NULL,
  Message VARCHAR(255) NOT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id),
  )CHARACTER SET utf8;