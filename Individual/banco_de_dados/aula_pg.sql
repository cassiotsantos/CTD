select c.nome as Musica, g.nome as Genero, c.compositor as nomeEscritor
from cancoes c
inner join generos g
on c.id_genero = g.id
where compositor like 'Willie Dixon';

select c.nome as Musica, g.nome as Genero
from cancoes c 
inner join generos g
on c.id_genero = g.id
where g.nome like 'Rock'; 

select a.titulo as Album, art.nome as Autor
from albuns a
inner join artistas art
on a.id_artista = art.id;

select c.nome as Musicas, tip.nome
from cancoes c
inner join tipos_de_arquivo tip
on c.id_tipo_de_arquivo = tip.id
where tip.nome like 'MPEG audio file';

select * from empregados;
select distinct titulo
from empregados;

use musimundos;

select count(c.id) as qtdClientes, c.pais
from clientes c
group by pais
having pais like '%Bra%il%';

select id_genero as genero, count(nome)
from cancoes
group by id_genero 
having id_genero = 6;

select * from faturas;

select sum(valor_total) as Total
from faturas;

select id_album, avg(duracao_milisegundos)
from cancoes
group by id_album
having id_album = 4;

select nome, id_tipo_de_arquivo, min(bytes) as Menor_arquivo
from cancoes
group by id_tipo_de_arquivo
order by menor_arquivo;

select id_cliente, sum(valor_total) as somaTotal
from faturas
group by id_cliente
having somaTotal > 45;


















