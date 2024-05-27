create database r6;

use r6;

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
idUsuario int,
constraint fkUsuario foreign key (idUsuario) references usuario(idUsuario));