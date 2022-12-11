
use musimundos;

select *
from albuns;

select id_artistas as CodArtista, count (id) as QtdAlbuns
From albuns
group by id_artista
having id_artista = 123     /*have é where quando usamos o having (ele funciona como um grupador) */
order by QtdAlbuns desc;

select id_artista as CodArtista, count(id) as QtdAlbuns
from albuns
group by id_artista
having id_artista = 113;


select * from faturas;

select pais_cobranca, count(id) as QtdFaturas, sum(valor_total) as TotalFatura,
Format (avg(valor_total),2) as MediaFaturas
from faturas
group by pais_cobranca
order by TotalFatura desc;

select pais_cobranca, sum(valor_total) as TotalFatura, max(valor_total) as MaiorFatura, min(valor_total) as MenorValor
from faturas
group by pais_cobranca
order by TotalFatura desc;	

select pais_cobranca, sum(valor_total) as TotalFatura, max(valor_total) as MaiorFatura
From faturas
group by pais_cobranca
having MaiorFatura > 20.00;

select id_cliente as Cliente, sum(valor_total) as TotalFatura, max(valor_total) as MaiorFatura, pais_cobranca as Pais
from faturas
group by id_cliente
/*having pais_cobranca like '%bra%il%';*/
/*order by TotalFatura desc;*/
having TotalFatura between 20.00 and 40.00;

/* 
ordem de execução do mysql:

Cláusula FROM
Cláusula WHERE
Cláusula GROUP BY
Cláusula HAVING
Cláusula SELECT
Cláusula ORDER BY

*/








