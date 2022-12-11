-- VIEW - Parte I  -- 

-- Clientes -- 

create view DetalheCliente as
select ClienteID, Contato, Fax, Telefone
from clientes;

select contato, fax
from clientes
where fax = ' ';

select contato, fax
from DetalheCliente
where fax = ' ';

-- Fornecedores -- 

create view DetalheFornecedor as
select ProvedorID,Contato,Empresa,Endereco
from provedores;

select Empresa, Endereco
from provedores
where Endereco like '%das Americanas%';

select Empresa, Endereco
from DetalheFornecedor
where Endereco like '%americanas%';

-- VIEW - Parte II - Desafio --

create view DetalheProdut as
select ProdutoID,ProdutoNome, round(PrecoUnitario,0), UnidadesEstoque, UnidadesPedidas 
from produtos;

alter table produtos
add prioridade varchar(20); 



