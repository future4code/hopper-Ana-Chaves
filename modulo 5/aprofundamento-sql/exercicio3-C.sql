USE `Hopper-4313736-ana-chaves`;


ALTER TABLE Project
ADD email VARCHAR(255) UNIQUE;

DESCRIBE Project;