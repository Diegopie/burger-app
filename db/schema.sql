-- DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db; 

CREATE TABLE burg (
    id int NOT NULL AUTO_INCREMENT,
    burgerName varchar(30) NOT NULL,
    isEaten boolean NOT NULL, 
    PRIMARY KEY (id)
);
