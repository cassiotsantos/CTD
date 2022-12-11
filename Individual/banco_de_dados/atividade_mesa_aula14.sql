use musimundos;

-- CONSULTAS -- 
-- 1 --
select c.nome as Musica, g.nome as Genero
from cancoes c
inner join generos g
on c.id_genero = g.id
order by g.nome;

-- 2 --

select concat(c.nome, ' ', c.sobrenome) as Clientes, c.pais as País
from clientes c
order by Clientes;

-- 3 --

select c.nome as Titulo, a.titulo as Album
from cancoes c
inner join albuns a
on c.id_album = a.id;

-- 4 --

select count(c.id) as QtdMusicas, g.nome as Genero
from cancoes c
inner join generos g
on c.id_genero = g.id
group by genero
order by g.nome desc;







