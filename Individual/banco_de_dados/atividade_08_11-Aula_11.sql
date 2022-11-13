/*Categorias e produtos*/

select * from categorias;

select CategoriaID, CategoriaNome, Descricao
from categorias;

select * from produtos;

select * from produtos
where Descontinuado = 1; /* não tem*/

select * from Produtos
where ProvedorID = 8;

select ProdutoID, ProdutoNome, CategoriaID,
format(PrecoUnitario,2) as PrecoUnitario
From produtos
Where PrecoUnitario between 10 and 22; 

select * from Produtos
where UnidadesEstoque < NivelReabastecimento;

select * from Produtos
where UnidadesEstoque < NivelReabastecimento and UnidadesPedidas =0;

/*Clientes*/
















