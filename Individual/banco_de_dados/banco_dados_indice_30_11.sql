use emarket;

show index from categorias;

select c.CategoriaNome as Categoria, p.ProdutoNome as Produto, format(PrecoUnitario,2) as Produto,
format((PrecoUnitario* 0.2),2) as Desconto,
format((PrecoUnitario - ( PrecoUnitario* 0.2)),2) as NovoValor 
from categorias c
left join produtos p
on c.CategoriaID = p.CategoriaID
where c.CategoriaNome = 'Seafood';

use sakila;

select titulo, descricao, ano_lancamento, nome
from sakila.idioma i
left join filme f
on i.idioma_id = f.idioma_id
where titulo = 'BOOGIE AMELIE';


show index from filme;

create index idx_filme on filme(titulo);
create index idx_idioma on idioma(nome);





