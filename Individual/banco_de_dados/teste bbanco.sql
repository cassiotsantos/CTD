CREATE TABLE usuario (
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR (50) NOT NULL,
	sobrenome VARCHAR (50),
	email VARCHAR (150) NOT NULL UNIQUE,
	data_nascimento DATE
);

ALTER TABLE usuario
ADD telefone VARCHAR(50);

INSERT INTO usuario (nome, sobrenome, email, data_nascimento, telefone)
VALUES ("Cássio", "Teixeira dos Santos", "psykno_trance@hotmail.com", "1989-04-26", 11953126968);

UPDATE usuario SET
nome = "Denis",
sobrenome = "Silveira Coelho"
WHERE id = 1;

DELETE FROM usuario WHERE id = 1; 
