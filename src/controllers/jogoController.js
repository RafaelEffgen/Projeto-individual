var jogoModel = require("../models/jogoModel");

function registrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var score = req.body.score;
    var time = req.body.time;
    var errors = req.body.errors;
    var idUsuario = req.body.idUsuario;


    // Faça as validações dos valores
    if (score == undefined) {
        res.status(400).send("Seu score está undefined!");
    } else if (time == undefined) {
        res.status(400).send("Seu tempo está undefined!");
    } else if (errors == undefined) {
        res.status(400).send("Seu erro está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        jogoModel.registrar(score, time, errors, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function listar(req, res) {
    
    var idUsuario = req.body.idUsuario;

    jogoModel.listarPorUsuario(idUsuario)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function(erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao listar! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );

}

function listarMaioresScores(req, res) {
    var quantidade = req.body.quantidade;

    jogoModel.listarMaioresScores(quantidade)
    .then(
        function(resultado) {
            res.json(resultado);
        }
    ).catch(
        function(erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao listar! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    registrar,
    listar,
    listarMaioresScores
}
