select * from faturas;

-- 1  --

select data_fatura, count(id) as QtdFaturas
from faturas
group by data_fatura;
-- resposta: 2010-02-12    qntd faturas: 405


-- 2 --
select pais_cobranca as pais, data_fatura as data_fat, count(pais_cobranca) as QtdFaturas, max(valor_total) as MaiorFatura,
Format (avg(valor_total),2) as MediaFaturas 
from faturas
group by pais_cobranca
having 2010-02-12;

 -- grupo: Cassio Teixeira dos Santos, José Ricardo , Vanilza Flora , Gabriely Souza, Wagner LIma --










	
