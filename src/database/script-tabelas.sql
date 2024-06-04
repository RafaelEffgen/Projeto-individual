create database r6;

use r6;

select*from usuario;

insert into usuario values
(default, 'prata', 'sasa', '11111111111', 'sasa@gmail.com', '123456'),
(default, 'ouro', 'bruna', '11111111111', 'bruna@gmail.com', '123456'),
(default, 'cobre', 'pedro', '11111111111', 'pedro@gmail.com', '123456'),
(default, 'platina', 'isabela', '11111111111', 'isabela@gmail.com', '123456'),
(default, 'diamante', 'lucas', '11111111111', 'lucas@gmail.com', '123456');

create table usuario(
idUsuario int primary key auto_increment,
patente varchar (45),
nome varchar (45),
cpf char (11),
email varchar(45),
senha varchar(45));

create table jogo(
idJogo int primary key auto_increment,
score int,
tempo int,
erros int,
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario) references usuario(idUsuario));

insert into usuario values
(default, 'prata', 'sasa', '11111111111', 'sasa@gmail.com', '123456'),
(default, 'ouro', 'bruna', '11111111111', 'bruna@gmail.com', '123456'),
(default, 'cobre', 'pedro', '11111111111', 'pedro@gmail.com', '123456'),
(default, 'platina', 'isabela', '11111111111', 'isabela@gmail.com', '123456'),
(default, 'diamante', 'lucas', '11111111111', 'lucas@gmail.com', '123456');

insert into jogo values
(default, 2, 0, 1, 5),
(default, 5, 0, 1, 6),
(default, 9, 0, 1, 7),
(default, 2, 0, 1, 8),
(default, 5, 0, 2, 9),
(default, 2, 0, 1, 10);

select * from jogo;

select * from usuario;


select usuario.nome, max(jogo.score) as score
        from usuario inner join jogo on jogo.fkUsuario = usuario.idUsuario
        group by usuario.nome ORDER BY max(jogo.score);
        select * from jogo;

select usuario.nome, max(jogo.score) as score
        from usuario inner join jogo on jogo.fkUsuario = usuario.idUsuario
        group by usuario.nome ORDER BY max(jogo.score) DESC limit 10;