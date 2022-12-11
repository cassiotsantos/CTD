-- 1 --

select * from correios, faturas;

select c.Empresa as EmpresaNome, count(f.FaturaId) as TotalFatura, format(sum(f.Transporte),2)as ValorTotalTransporte
from correios c
inner join faturas f
on f.FormaEnvio = c.CorreioID
group by c.Empresa;

-- 2 --

select * from clientes;

select concat('Sr/a.', ' ' ,c.Contato) as Cliente, c.Titulo as Cargo, concat(c.Endereco,', ',c.cidade)
from clientes c
group by c.Contato
order by c.Contato;

-- 3 --

select c.CategoriaNome, c.Descricao, count(p.ProdutoID) as TotalProdutos
from categorias c
inner join produtos p
group by  c.CategoriaNome;





