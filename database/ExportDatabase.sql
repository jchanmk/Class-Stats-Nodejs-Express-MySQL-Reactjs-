-- MySQL dump 10.13  Distrib 8.0.16, for macos10.14 (x86_64)
--
-- Host: 127.0.0.1    Database: ClassStats
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Attendance_Attn`
--

DROP TABLE IF EXISTS `Attendance_Attn`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Attendance_Attn` (
  `CourseID` int(11) NOT NULL,
  `Inattentive` int(11) DEFAULT NULL,
  `Attentive` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Attendance_Attn`
--

LOCK TABLES `Attendance_Attn` WRITE;
/*!40000 ALTER TABLE `Attendance_Attn` DISABLE KEYS */;
INSERT INTO `Attendance_Attn` VALUES (1077,5,1,6),(1078,0,0,0),(1089,0,0,0),(1092,0,0,0),(1095,0,0,0),(1099,0,0,0),(1100,0,0,0),(1101,0,0,0),(1609,5,2,7),(1612,0,0,0),(1615,3,6,9),(1624,0,0,0),(1625,0,0,0),(1626,1,0,1),(2099,1,1,2);
/*!40000 ALTER TABLE `Attendance_Attn` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Class_Difficulty`
--

DROP TABLE IF EXISTS `Class_Difficulty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Class_Difficulty` (
  `CourseID` int(11) NOT NULL,
  `Easy` int(11) DEFAULT NULL,
  `Medium` int(11) DEFAULT NULL,
  `Hard` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Class_Difficulty`
--

LOCK TABLES `Class_Difficulty` WRITE;
/*!40000 ALTER TABLE `Class_Difficulty` DISABLE KEYS */;
INSERT INTO `Class_Difficulty` VALUES (1077,18,11,10,39),(1078,0,0,0,0),(1089,0,0,0,0),(1092,0,0,0,0),(1095,0,0,0,0),(1099,0,0,0,0),(1100,0,0,0,0),(1101,0,0,0,0),(1609,12,7,4,23),(1612,0,0,0,0),(1615,4,2,2,8),(1624,1,0,0,1),(1625,2,1,2,5),(1626,2,1,2,5),(2099,3,3,1,7);
/*!40000 ALTER TABLE `Class_Difficulty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Class_Enjoyment`
--

DROP TABLE IF EXISTS `Class_Enjoyment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Class_Enjoyment` (
  `CourseID` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Class_Enjoyment`
--

LOCK TABLES `Class_Enjoyment` WRITE;
/*!40000 ALTER TABLE `Class_Enjoyment` DISABLE KEYS */;
INSERT INTO `Class_Enjoyment` VALUES (1077,190,48),(1078,0,0),(1089,0,0),(1092,0,0),(1095,0,0),(1099,0,0),(1100,0,0),(1101,0,0),(1609,60,16),(1612,0,0),(1615,77,22),(1624,5,1),(1625,21,5),(1626,5,1),(2099,29,6);
/*!40000 ALTER TABLE `Class_Enjoyment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Class_Type`
--

DROP TABLE IF EXISTS `Class_Type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Class_Type` (
  `CourseID` int(11) NOT NULL,
  `Lecture` int(11) DEFAULT NULL,
  `Discussion` int(11) DEFAULT NULL,
  `Count` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Class_Type`
--

LOCK TABLES `Class_Type` WRITE;
/*!40000 ALTER TABLE `Class_Type` DISABLE KEYS */;
INSERT INTO `Class_Type` VALUES (1077,2,1,'3'),(1078,0,0,'0'),(1089,0,0,'0'),(1092,0,0,'0'),(1095,0,0,'0'),(1099,0,0,'0'),(1100,0,0,'0'),(1101,0,0,'0'),(1609,4,2,'6'),(1612,0,0,'0'),(1615,2,1,'3'),(1624,0,0,'0'),(1625,0,0,'0'),(1626,0,0,'0'),(2099,2,0,'2');
/*!40000 ALTER TABLE `Class_Type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Class_Usefulness`
--

DROP TABLE IF EXISTS `Class_Usefulness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Class_Usefulness` (
  `CourseID` int(11) NOT NULL,
  `Useful` int(11) DEFAULT NULL,
  `NotUseful` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Class_Usefulness`
--

LOCK TABLES `Class_Usefulness` WRITE;
/*!40000 ALTER TABLE `Class_Usefulness` DISABLE KEYS */;
INSERT INTO `Class_Usefulness` VALUES (1077,17,9,26),(1078,0,0,0),(1089,0,0,0),(1092,0,0,0),(1095,0,0,0),(1099,0,0,0),(1100,0,0,0),(1101,0,0,0),(1609,13,8,21),(1612,0,0,0),(1615,4,3,7),(1624,1,0,1),(1625,4,1,5),(1626,2,1,3),(1779,2,1,3),(2099,3,2,5);
/*!40000 ALTER TABLE `Class_Usefulness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Courses`
--

DROP TABLE IF EXISTS `Courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Courses` (
  `CourseID` int(11) NOT NULL,
  `Name` varchar(145) DEFAULT NULL,
  `InstructorID` varchar(45) DEFAULT NULL,
  `DeptID` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES (1077,'ECON101: PRINCIPLES OF ECONOMICS I','4','2'),(1078,'ECON101: PRINCIPLES OF ECONOMICS I','7','2'),(1089,'ECON272: APPLIED ECONOMETRICS','8','2'),(1092,'ECON311: INTERNATIONAL ECONOMICS','11','2'),(1095,'ECON350: BEHAVIORAL ECONOMICS','9','2'),(1099,'ECON495: SENIOR SEMINAR: FIRM-LEVEL INTERNATIONAL TRADE AND INVESTMENT','11','2'),(1100,'ECON495: SENIOR SEMINAR: INDUSTRIAL ORGANIZATION','10','2'),(1101,'ECON495: SENIOR SEMINAR: HEALTH ECONOMICS','12','2'),(1609,'COMP131: FUNDAMENTALS OF COMPUTER SCIENCE','13','1'),(1612,'COMP131: FUNDAMENTALS OF COMPUTER SCIENCE','2','1'),(1615,'COMP131: FUNDAMENTALS OF COMPUTER SCIENCE','6','1'),(1624,'COMP229: DATA STRUCTURES','6','1'),(1625,'COMP229: DATA STRUCTURES','3','1'),(1626,'COMP239: COMPUTER ORGANIZATION','1','1'),(2099,'COMP373: DATABASES','2','1');
/*!40000 ALTER TABLE `Courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Departments`
--

DROP TABLE IF EXISTS `Departments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Departments` (
  `DepartmentID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`DepartmentID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Departments`
--

LOCK TABLES `Departments` WRITE;
/*!40000 ALTER TABLE `Departments` DISABLE KEYS */;
INSERT INTO `Departments` VALUES (1,'Computer Science'),(2,'Economics');
/*!40000 ALTER TABLE `Departments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Exam_Difficulty`
--

DROP TABLE IF EXISTS `Exam_Difficulty`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Exam_Difficulty` (
  `CourseID` int(11) NOT NULL,
  `Easy` int(11) DEFAULT NULL,
  `Medium` int(11) DEFAULT NULL,
  `Hard` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Exam_Difficulty`
--

LOCK TABLES `Exam_Difficulty` WRITE;
/*!40000 ALTER TABLE `Exam_Difficulty` DISABLE KEYS */;
INSERT INTO `Exam_Difficulty` VALUES (1077,3,2,2,7),(1078,0,0,0,0),(1089,0,0,0,0),(1092,0,0,0,0),(1095,0,0,0,0),(1099,0,0,0,0),(1100,0,0,0,0),(1101,0,0,0,0),(1609,5,4,3,12),(1612,0,0,0,0),(1615,3,1,6,10),(1624,0,0,0,0),(1625,0,1,0,1),(1626,0,1,0,1),(2099,2,2,0,4);
/*!40000 ALTER TABLE `Exam_Difficulty` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Homework_Load`
--

DROP TABLE IF EXISTS `Homework_Load`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Homework_Load` (
  `CourseID` int(11) NOT NULL,
  `Light` int(11) DEFAULT NULL,
  `Heavy` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Homework_Load`
--

LOCK TABLES `Homework_Load` WRITE;
/*!40000 ALTER TABLE `Homework_Load` DISABLE KEYS */;
INSERT INTO `Homework_Load` VALUES (1077,2,2,4),(1078,0,0,0),(1089,0,0,0),(1092,0,0,0),(1095,0,0,0),(1099,0,0,0),(1100,0,0,0),(1101,0,0,0),(1609,2,1,3),(1612,0,0,0),(1615,1,1,2),(1624,0,0,0),(1625,0,0,0),(1626,0,0,0),(2099,1,0,1);
/*!40000 ALTER TABLE `Homework_Load` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Instructors`
--

DROP TABLE IF EXISTS `Instructors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Instructors` (
  `InstructorID` int(11) NOT NULL AUTO_INCREMENT,
  `Fname` varchar(45) NOT NULL,
  `Lname` varchar(45) NOT NULL,
  `DeptID` varchar(45) NOT NULL,
  PRIMARY KEY (`InstructorID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Instructors`
--

LOCK TABLES `Instructors` WRITE;
/*!40000 ALTER TABLE `Instructors` DISABLE KEYS */;
INSERT INTO `Instructors` VALUES (1,'Jeffrey','Miller','1'),(2,'Celia','Q, Chen','1'),(3,'Justin','Li','1'),(4,'Andrew','Jalil','2'),(5,'Mary','Lopez','2'),(6,'Umit','Yalcinalp','1'),(7,'Daron','Djerdjian','2'),(8,'Kevin','Williams','2'),(9,'Brandon','Lehr','2'),(10,'Leslie','Chiou','2'),(11,'Jesse','Mora','2'),(12,'Dianne','Ngo','2'),(13,'Hsieh','H, Chen','1'),(14,'Kathryn','Leonard','1');
/*!40000 ALTER TABLE `Instructors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Prof_Approach`
--

DROP TABLE IF EXISTS `Prof_Approach`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Prof_Approach` (
  `CourseID` int(11) NOT NULL,
  `Yes` int(11) DEFAULT NULL,
  `No` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prof_Approach`
--

LOCK TABLES `Prof_Approach` WRITE;
/*!40000 ALTER TABLE `Prof_Approach` DISABLE KEYS */;
INSERT INTO `Prof_Approach` VALUES (1077,3,1,4),(1078,0,0,0),(1089,0,0,0),(1092,0,0,0),(1095,0,0,0),(1099,0,0,0),(1100,0,0,0),(1101,0,0,0),(1609,3,1,4),(1612,0,0,0),(1615,1,1,2),(1624,0,0,0),(1625,1,0,1),(1626,0,0,0),(2099,2,0,2);
/*!40000 ALTER TABLE `Prof_Approach` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Prof_Rating`
--

DROP TABLE IF EXISTS `Prof_Rating`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Prof_Rating` (
  `CourseID` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prof_Rating`
--

LOCK TABLES `Prof_Rating` WRITE;
/*!40000 ALTER TABLE `Prof_Rating` DISABLE KEYS */;
INSERT INTO `Prof_Rating` VALUES (1077,86,24),(1078,0,0),(1089,0,0),(1092,0,0),(1095,0,0),(1099,0,0),(1100,0,0),(1101,0,0),(1609,40,10),(1612,0,0),(1615,11,3),(1624,0,0),(1625,9,2),(1626,5,1),(2099,23,6);
/*!40000 ALTER TABLE `Prof_Rating` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Students` (
  `StudentID` varchar(9) NOT NULL,
  `Fname` varchar(45) NOT NULL,
  `Lname` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Major` varchar(45) DEFAULT NULL,
  `Password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`Email`,`StudentID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES ('A12345678','John','Doe','123@hotmail.com','Econ','$2a$10$HKIBmNkaztf5/1VVBWp1GOW6EndL8Mph45doCEriOql9Ky1FRWyr2'),('A01197784','Julian','Chan','mchan2@oxy.edu','Computer Science','$2a$10$hPB3EhZZLYQgODdTNwJl/eJM1gq6Vgp2q0N/lFzzVnHCcHU6r6qou'),('A00000000','Test User','Test','test@oxy.edu','Computer Science','$2a$10$2rWrv.o9.bs64yhazKo1V.VoBrnZxdwIOjR4W6eG.9vQs78kG4LSO');
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Takes`
--

DROP TABLE IF EXISTS `Takes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Takes` (
  `StudentNum` varchar(9) NOT NULL,
  `CourseNum` int(11) NOT NULL,
  `Semester` varchar(45) NOT NULL,
  PRIMARY KEY (`StudentNum`,`CourseNum`),
  KEY `CourseID_idx` (`CourseNum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Takes`
--

LOCK TABLES `Takes` WRITE;
/*!40000 ALTER TABLE `Takes` DISABLE KEYS */;
INSERT INTO `Takes` VALUES ('21',12,'2'),('A00000000',1077,'Fall 2019'),('A00000000',1615,'Fall 2019'),('A00000000',1625,'Spring 2019'),('A00000000',1626,'Fall 2019'),('A00000000',2099,'Fall 2019'),('A01197784',1077,'Fall 2019'),('A01197784',1609,'Spring 2019'),('A01197784',1615,'Fall 2019'),('A01197784',1625,'Fall 2019'),('A01197784',2099,'Spring 2019'),('A0123456',1615,'Fall 2019');
/*!40000 ALTER TABLE `Takes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teaches`
--

DROP TABLE IF EXISTS `Teaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Teaches` (
  `CourseID` int(11) NOT NULL,
  `InstructorID` varchar(45) NOT NULL,
  `Semester` varchar(45) NOT NULL,
  PRIMARY KEY (`CourseID`,`InstructorID`,`Semester`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teaches`
--

LOCK TABLES `Teaches` WRITE;
/*!40000 ALTER TABLE `Teaches` DISABLE KEYS */;
INSERT INTO `Teaches` VALUES (1077,'4','Fall 2019'),(1077,'5','Fall 2019'),(1078,'7','Fall 2019'),(1089,'8','Fall 2019'),(1092,'11','Fall 2019'),(1095,'9','Fall 2019'),(1099,'11','Fall 2019'),(1100,'10','Fall 2019'),(1101,'12','Fall 2019'),(1609,'13','Fall 2019'),(1612,'2','Fall 2019'),(1615,'6','Fall 2019'),(1624,'6','Fall 2019'),(1625,'3','Fall 2019'),(1626,'1','Spring 2019'),(2099,'2','Spring 2019');
/*!40000 ALTER TABLE `Teaches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Test_Heavy`
--

DROP TABLE IF EXISTS `Test_Heavy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `Test_Heavy` (
  `CourseID` int(11) NOT NULL,
  `Light` int(11) DEFAULT NULL,
  `Heavy` int(11) DEFAULT NULL,
  `Count` int(11) DEFAULT NULL,
  PRIMARY KEY (`CourseID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Test_Heavy`
--

LOCK TABLES `Test_Heavy` WRITE;
/*!40000 ALTER TABLE `Test_Heavy` DISABLE KEYS */;
INSERT INTO `Test_Heavy` VALUES (1077,2,1,3),(1078,0,0,0),(1089,0,0,0),(1092,0,0,0),(1095,0,0,0),(1099,0,0,0),(1100,0,0,0),(1101,0,0,0),(1609,3,5,8),(1612,0,0,0),(1615,2,1,3),(1624,1,0,1),(1625,0,0,0),(1626,1,0,1),(2099,0,0,0);
/*!40000 ALTER TABLE `Test_Heavy` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-02 23:30:06
