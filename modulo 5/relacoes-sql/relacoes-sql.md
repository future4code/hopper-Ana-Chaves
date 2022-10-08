# Exercicios Relações SQL

## Exercício 1

### a) A chave estrangeira permite a relções entre as tabelas.
### b) 
    ~~~ SQL
    CREATE TABLE Rating (
        id VARCHAR(255) PRIMARY KEY,
        comment TEXT NOT NULL,
        rate FLOAT NOT NULL,
        movie_id VARCHAR(255),
        FOREIGN KEY (movie_id) REFERENCES Movie (id)
    )
    
    INSERT INTO Rating (id,comment, rate, movie_id)
    VALUES("001" , "Não gostei!", "4", "001")
    ~~~
### c) Não é possível adicionar uma nova avaliação em um id de um filme que não exite devido a relação entre a tabela avaliação e a de  filme.
### d) 
    ~~~~ SQL
    ALTER TABLE Movie
    DROP COLUMN rating;
    ~~~~
### e) Não é pssível deletar um filme sem antes deletar a avaliação devido a reação entre as tabelas.

## Exercício 2

### a) Essa é uma tabela de relção entre atores e os filmes onde um ator pode participar de diferentes filmes e um filme pode ter a participação de diferentes atores.
### b) 
    ~~~~ SQL
    INSERT INTO (movie_id, actor_id)
    VALUES("001", "002")
          ("001", "004")
          ("003", "001")
          ("002", "003");
    ~~~~
### c) Não será possível devido a relção entre as tabelas 
### d) Não será possível devido a relção entre as tabelas 

## Exercício 3

### a) A query está relacionando os dados das tabela Movie e Rating

### b)
    ~~~~ SQL
    SELECT 
    m.name 
    m.id
    r.rate
    FROM Movie as m
    INNER JOIN Rating as r ON m.id = r.movie_id;
    ~~~~