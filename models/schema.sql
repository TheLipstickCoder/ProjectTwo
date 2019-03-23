DROP DATABASE IF EXISTS goalsDB;
CREATE DATABASE goalsDB;

DROP DATABASE IF EXISTS goalsDB;
CREATE DATABASE goalsDB;

CREATE TABLE career
(
id int NOT NULL AUTO_INCREMENT,
steps varchar(255) NOT NULL,
achieved BOOLEAN,
rating INT,
PRIMARY KEY (id)
);

CREATE TABLE healthfit
(
id int NOT NULL AUTO_INCREMENT,
steps varchar(255) NOT NULL,
achieved BOOLEAN,
rating INT,
PRIMARY KEY (id)
);

CREATE TABLE book
(
id int NOT NULL AUTO_INCREMENT,
steps varchar(255) NOT NULL,
achieved BOOLEAN,
rating INT,
PRIMARY KEY (id)
);

CREATE TABLE business
(
id int NOT NULL AUTO_INCREMENT,
steps varchar(255) NOT NULL,
achieved BOOLEAN,
rating INT,
PRIMARY KEY (id)
);

CREATE TABLE hobby
(
id int NOT NULL AUTO_INCREMENT,
steps varchar(255) NOT NULL,
achieved BOOLEAN,
rating INT,
PRIMARY KEY (id)
);

-- Insert a set of records.
INSERT INTO steps (career) VALUES ;
INSERT INTO steps (healthfit) VALUES ;
INSERT INTO steps (book) VALUES ;
INSERT INTO steps (business) VALUES ;
INSERT INTO steps (hobby) VALUES ;
