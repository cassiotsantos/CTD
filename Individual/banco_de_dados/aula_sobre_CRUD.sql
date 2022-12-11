-- drop database if exists cardapio;
create database if not exists cardapio;
use cardapio;

create table categorias ( 
IdCategoria int not null auto_increment primary key,
nomeCategoria varchar(30),
url_imagem varchar (250));

create table produtos(
idProduto int not null auto_increment primary key,
IdCategoria int,
nome varchar (100),
descricao varchar (300),
iagem varchar (250),
valor decimal (5,2),
constraint fk_cat_prod
	foreign key (idCategoria)
    references categorias(idCategoria)
);

create table clientes (
idCliente int not null auto_increment primary key,
nome varchar (50),
sobrenome varchar (100),
cpf char(11),
nrCelular char(15),
email varchar (150)
);

create table pedidos(
idPedido int not null auto_increment primary key,
idProduto int,
idCliente int,
quantidade int,
precoTotal decimal (10,2),

constraint fk_pedi_prod
	foreign key (idProduto)
    references produtos(idProduto),

constraint fk_pedi_cli
	foreign key (idCliente)
    references clientes(idCliente)
);

create table vendas(
idVendas int not null auto_increment primary key,
idPedido int,
dataAtual date,
horaATual time,
total decimal(10,2),

constraint fk_vendas_pedidos_1
	foreign key (idPedido)
    references pedidos(idPedido)
);

insert into categorias (nomeCategoria,url_imagem)
values ('Pratos', 'https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_prato-com-arroz-feijao-ovo-batata-frita-e-carne2.jpg?quality=70&strip=info&w=960'),
('Lanches', 'https://img.freepik.com/fotos-gratis/vista-frontal-deliciosas-batatas-fritas-com-cheeseburgers-em-fundo-escuro-lanche-prato-fast-food-torrada-hamburguer-jantar_140725-158687.jpg?w=2000'),
('Sobremesa', 'https://www.receitasnestle.com.br/sites/default/files/2021-08/capa-sobremesas_1.jpg'),
('Bebidas', 'https://riqs.com.br/wp-content/uploads/Bebidas.png'); 

insert into produtos (IdCategoria,nome,descricao,iagem,valor)
values (1, 'Rosbife com batatas', 'Rosbife fatiado com batata e cebola. Acompanha arroz branco', 'https://i0.wp.com/centralblogs.com.br/wp-content/uploads/2021/06/rosbife-com-batatas-e-cebolas-8.jpg?resize=696%2C398&ssl=1', 85.45),
(1, 'Macarronada da Nona', 'Macarronada com molho de carne moída. Acompanha queijo pparmesão ralado', 'https://i.ytimg.com/vi/ngiJtHGTW7k/maxresdefault.jpg', 35);







