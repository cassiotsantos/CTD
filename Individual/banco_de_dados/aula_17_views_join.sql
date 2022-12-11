SELECT * FROM emarket.empregados;

create view EmpregadoVenda as
select f.FaturaId, concat(e.nome, e.sobrenome) as Funcionario,
DataFatura, Transporte
from faturas f
inner join empregados e
on f.EmpregadoID = e.EmpregadoID;

select ev.FaturaId, ev.Funcionario, ev.DataFatura, c.contato
from empregadovenda ev
inner join faturas f
on ev.FaturaId = f.FaturaId
Inner join clientes c
on c.ClienteID = f.ClienteID;

/* 

para atualizar um dado na tabela 

update funcionarios set sobrenome = 'Rocha'
Where nome = 'Nancy';

set foreign_key_checks = 0; -- quando estiver com uam chave
delete from funcionaioios
where nome = 'Nancy';
*/ 

create view DetalhesEnvio As
select FaturaId, date_format(DataFatura, '%d/%m/%Y') as DataFatura, date_format(DataEnvio, '%d/%m/%Y') as DataEnvio, format(transporte,2) as Transporte, Concat(EnderecoEnvio, ' ', CidadeEnvio, ' ', CodigoPostalEnvio, ' ', PaisEnvio) as Destino
from faturas;

select * From DetalhesEnvio;

select c.Empresa, de.FaturaId, de.Transporte, de.DataFatura, de.DataEnvio
from correios c
inner join faturas f
on c.CorreioID = f.FormaEnvio
inner join DetalhesEnvio de
on de.FaturaID = f.FaturaId;

create view produtos_em_estoque as
select c.CategoriaNome, ProdutoID, ProdutoNome, PrecoUnitario
from categorias c
left join produtos p
on c.CategoriaId = p.CategoriaID;

select * from produtos_em_estoque;

select pe.CategoriaNome, pe.ProdutoID, pe.ProdutoNome, pe.PrecoUnitario, df.Quantidade 
from produtos_em_estoque pe
inner join detalhefatura df
on pe.ProdutoId = df.ProdutoID;




