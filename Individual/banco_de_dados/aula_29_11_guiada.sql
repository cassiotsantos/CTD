create view vw_detalheFilmes as 
select c.nome as categoria, f.titulo, f.ano_lancamento, concat(a.nome,' ', a.sobrenome) as Ator
from categoria c 
left join filme_categoria fc
on c.categoria_id = fc.categoria_id
left join filme f
on fc.filme_id = f.filme_id
left join filme_ator fa
on f.filme_id = fa.filme_id
left join ator a
on fa.ator_id = a.ator_id;

select * from vw_detalheFilmes;

select f.titulo as filme, count( distinct a.ator_id) as qtdAtores
From filme f
left join filme_ator fa
on f.filme_id = fa.filme_id
left join ator a
on fa.ator_id = a.ator_id
group by f.titulo 
order by qtdAtores desc;

select concat(a.nome, ' ', a.sobrenome) as Atores, count(f.filme_id) as QtdFilmes 
from ator a
right join filme_ator fa
on a.ator_id = fa.ator_id
right join filme f 
on fa.filme_id = f.filme_id
group by atores
order by QtdFilmes desc;


