create view dadosCliente as
select ClienteId, Contato, Telefone, Fax
from clientes; 

select * from dadosCliente;

select Contato, Telefone, fax
from clientes 
where fax = ' ';

SELECT c.categorianome, p.ProdutoNome, coalesce(p.ProdutoNome, 'Não Tem Produto') 
FROM categorias c
left join produtos p
on c.CategoriaID = p.categoriaID;

select Contato, Telefone, Fax
from clientes 
where fax like ''; 

create view vw_Fornecedores as
select ProvedorID, Contato, Empresa, concat(Endereco,' - ', Cidade, ' (', codigoPostal,') ', Pais) as Endereco
from provedores;

select ProvedorID, Contato, Empresa, Endereco, Pais
from provedores
where Endereco like '%Americanas%' and Pais like 'Brazil';

select ProvedorID, Contato, Empresa, Endereco
from vw_Fornecedores
where Endereco like '%Americanas%';

select Contato, Telefone, Fax
from clientes 
where fax <> ''; 

create view vw_controleEstoque as
select ProdutoID,ProdutoNome, round(PrecoUnitario) as PrecoUnitario,UnidadesEstoque,UnidadesPedidas,
case when UnidadesPedidas = 0 then 'Baixa'
when UnidadesPedidas < UnidadesEstoque then 'Média'
when UnidadesPedidas < 2*UnidadesEstoque then 'Urgente'
else 'Prioritario'
end as Prioridade
from produtos;

select * from vw_controleEstoque;

select prioridade, count(ProdutoID) as QtdProdutos, 
format(avg(PrecoUnitario),2) as PrecoMedio
from vw_controleEstoque
group by prioridade
having count(ProdutoID) > 5;



