CREATE DATABASE estoque;

USE estoque;

CREATE TABLE produtos(
    id INT AUTO_IMCREMENT PRIMARY KEY,
    produto VARCHAR(100) NOT NULL,
    tipo VARCHAR(100) NOT NULL,
    quantidade VARCHAR(100) NOT NULL
);