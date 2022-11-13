select * from cancao
where titulo like '%z%'; /* total de 9 canções*/ 

select * from cancao
where titulo like '_a%s'; /* total de 2 canções  */

select * from playlist;

select qtdcancoes, titulo
from playlist
order by qtdcancoes desc
limit 1;

select idPlaylist as 'Id Playlist', titulo as 'Título', qtdcancoes as 'Quantidade de canções'
from playlist
order by qtdcancoes desc
limit 1; 

select * from usuario
order by Data_nac desc
limit 5 offset 10;

select * from cancao;

select titulo, qtdreproducao
from cancao
order by qtdreproducao desc
limit 5;

select idAlbum, titulo
from album
order by titulo;

select * from album;

select idAlbum, titulo, imagemcapa
from album
where imagemcapa is Null
order by titulo;

insert into usuario (idUsuario,Nomeusuario,NomeCompleto,Data_nac,sexo,Cod,senha,Pais_idPais)
values (20,'novousuariodespotify@gmail.com', 'Elmer Santos', '1991-11-15','M','', 'S4321m','9'); 

delete from generoxcancao
where IdGenero = 9; 

select * from artista where imagem is null;
update`artista` set `imagem` = 'Imagem em falta' where `imagem` is null;


