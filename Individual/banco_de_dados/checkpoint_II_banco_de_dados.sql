-- CRIACÃO BANCO DE DADOS / CHAVES PRIMÁRIAS E ESTRANGEIRAS --

-- drop database if exists biblioteca;
create database if not exists biblioteca ;
use biblioteca;

create table livros ( 
idLivro int not null auto_increment primary key,
titulo varchar(100),
genero varchar(250),
nomeSecao varchar(30),
isbn char(13),
nomeAutor varchar(50),
qtdCopias int,
statusLivro varchar (50));

create table usuarios ( 
idUsuario int not null auto_increment primary key,
nomeCompleto varchar(150),
cpf char(11),
rg char(9),
contato varchar(11)
);

create table funcionarios ( 
idFuncionario int not null auto_increment primary key,
nomeCompleto varchar(150),
cpf char(11),
rg char(9),
contato varchar(11));

create table enderecos ( 
idEndereco int not null auto_increment primary key,
idUsuario int,
logradouro varchar(150),
numero int,
complemento varchar(30),
bairro varchar(50),
cidade varchar (50),
cep char(8),
estado char(2),

constraint fk_id_usuario
	foreign key (idUsuario)
    references usuarios(idUsuario));   


create table emprestimos ( 
idEmprestimos int not null auto_increment primary key,
idUsuario int,
idLivro int,
dataRetirada date,
dataDevolucao date,
statusEmprestimo varchar(50),
idFuncionario int,

constraint fk_id_usuario_emprest
	foreign key (idUsuario)
    references usuarios(idUsuario),
    
constraint fk_id_livro
	foreign key (idLivro)
    references livros(idLivro),

constraint fk_id_funcion_emprest
	foreign key (idFuncionario)
    references funcionarios (idFuncionario)
);

-- INSERSÃO DE DADOS --

insert into usuarios (nomeCompleto,cpf,rg,contato)
values ('João Batista Gomes Marotti', 28163698462, 272575379, 81971782202),
('Eduardo Braz Gripp', 28466558470, 286543539, 82984635871),
('Odileia Spilman Barroso', 76922717120, 386843703, 62986967763),
('Emanuel Leandro Eger', 37623803093, 224686677, 51986041565),
('Danielle Macário Souza', 63434656502, 238513713, 77974424346);

insert into enderecos (idUsuario,logradouro,numero,complemento,bairro,cidade,cep,estado)
values (1,'Travessa Doutor Couto Maia', 10,' Apto 12 bloco 2', 'Bonfim', 'Salvador', 40415240, 'BA'),
(2,'Avenida Nicarágua', 10,'casa 2', 'Embratel', 'Porto Velho', 76820880, 'RO'),
(3,'Avenida Capitão Júlio Bezerra', 2360,'N/A', 'Centro', 'Boa Vista',  76820880, 'RR'),
(4,'Rua Francisco Torquilho', 126,'N/A', 'São Mateus', 'São João de Meriti', 25530071, 'RJ'),
(5,'Rua Brasília', 62,'Apto 80', 'Conradinho', 'Guarapuava',  85055550, 'PR');

insert into funcionarios (nomeCompleto,cpf,rg,contato)
values ('Nara Helena Cavalcanti Fernandes', 88030442998, 477298126, 44985812394),
('Dayvid Teodoro Darmont', 80452868300, 366275860, 88987485211),
('Elenir Simoes Annunziato', 62834178097, 274743437, 47993724108),
('Cauã Borralho Jesus', 22885571500, 494746154, 77987647467);

insert into livros(titulo,genero,nomeSecao,isbn,nomeAutor,qtdCopias,statusLivro)
values ('A paciente silenciosa', 'suspense', 'Terror/Suspense', 9788533302273 ,'Alex Michaelides', 5, 'Disponível'),
('O homem de giz', 'Terror', 'Terror/Suspense', ' ' , 'C.J. Tudor', 1, 'Disponível'),
('O silêncio dos inocentes', 'Terror', 'Terror/Suspense', '9968513502142 ' , 'Thomas Harris', 2, 'Alugado'),
('Withering Heights', 'Romance', 'Romance', '9869454405500' , 'Emily Brontë', 1, 'Reservado'),
('Orgulho e Preconceito', 'Romance', 'Romance', '9119468247201' , 'Jane Austen', 2, 'Em reparo'),
('O senhor dos Anéis', 'Fantansia', 'Ficção/Fantasia', '9999460051001' , 'J. R. R. Tolkien', 2, 'Disponível'),
('Eragon', 'Fantansia', 'Ficção/Fantasia', '9560465071310' , 'Christopher Paolini', 5, 'Disponível'),
('Neuromancer', 'ficção científica', 'Ficção/Fantasia', ' ' , 'William Gibson', 1, 'Perdido'),
('I, Robot', 'ficção científica', 'Ficção/Fantasia', '9846448262791' , 'Isaac Asimov', 3, 'Disponível');

insert into emprestimos(idUsuario,idLivro,dataRetirada,dataDevolucao,statusEmprestimo,idFuncionario)
values(1, 3, '2022-11-28', '2022-12-05', 'No prazo', 4),
(2, 3, '2022-11-20', '2022-11-28', 'Em atraso', 3),
(3, 4, '2022-11-30', '2022-12-06', 'Aguardando retirada', 3);

-- ATUALIZAR DADOS EM UMA TABELA --
-- Atualizar o contato do funcionario 2 --

UPDATE funcionarios set contato = 82995246281
where idFuncionario = 2;

-- EXCLUIR DADOS EM UMA TABELA --
-- funcionário 1 : Nara Helena Cavalcanti Fernandes excluído -- 

set foreign_key_checks = 0;
delete from funcionarios
where idFuncionario = 1;

-- SELEÇÃO DE DADOS EM UMA TABELA --
-- filtrar apenas livros de romance com o titulo e autor:

select titulo, genero, nomeAutor
from livros
where genero like '%romance%';

-- SELEÇÃO DE DADOS USANDO O JOIN --
-- localizar usuário com livro em atraso + o contato--

select e.StatusEmprestimo, date_format(e.dataDevolucao, '%d/%m/%Y') as dataDevolucao, u.idUsuario, u.nomeCompleto, u.contato, l.idLivro, l.titulo
from emprestimos e
inner join usuarios u
on e.idUsuario = u.idUsuario
inner join livros l
on e.idLivro = l.idLivro
where statusEmprestimo like 'Em atraso';


