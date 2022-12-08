USE `Hopper-4313736-ana-chaves`;


CREATE TABLE Project(
	id VARCHAR(11) PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    date DATE
);






