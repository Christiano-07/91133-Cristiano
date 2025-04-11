CREATE DATABASE IF NOT EXISTS contatos;

USE contatos;

CREATE TABLE IF NOT EXISTS contatos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    tel VARCHAR(20),
    email VARCHAR(100)
)
