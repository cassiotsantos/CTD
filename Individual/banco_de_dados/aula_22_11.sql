USE emarket;

SELECT FORMAT( SUM(f.Transporte),2) AS TotalFatura, c.Pais 
FROM faturas f
INNER JOIN clientes c
ON f.ClienteId = c.ClienteId
GROUP BY c.Pais;

SELECT c.Contato, UPPER(titulo) AS Titulo
FROM clientes c
INNER JOIN faturas f
ON c.ClienteId = f.ClienteId
WHERE f.DataFatura < '1996-12-31'
order by c.contato;

SELECT  Concat(left(Contato, instr(Contato, ' ')), substring(right(Contato, length(Contato) - instr(Contato,'')), 1, 1)) as contato, UPPER(titulo) AS Titulo
FROM clientes c
INNER JOIN faturas f
ON c.ClienteId = f.ClienteId
WHERE f.DataFatura < '1996-12-31'
order by c.contato;


select right(concat('0000000000', f.FaturaID),10) as faturaId, 
date_format(f.DataFatura, '%d-%m-%Y') as dataFatura,
c.cidade, f.CidadeEnvio
from Faturas f
inner join Clientes c
on f.ClienteId = c.ClienteId
Where c.Cidade <> f.CidadeEnvio and c.Pais like 'UK';



