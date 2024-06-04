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


function listarMaioresScores(req, res) {
    
    jogoModel.listarMaioresScores()
    .then(
        function(resultado) {
        
            res.json({
                primeiroLugar: resultado[0].nome,
                segundoLugar: resultado[1].nome,
                terceiroLugar: resultado[2].nome,
                quartoLugar: resultado[3].nome,
                quintoLugar: resultado[4].nome,
                terceiroLugar: resultado[2].nome,
                primeiroLugarPt: resultado[0].score,
                segundoLugarPt: resultado[1].score,
                terceiroLugarPt: resultado[2].score,
                quartoLugarPt: resultado[3].score,
                quintoLugarPt: resultado[4].score
           
            })
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
    listarMaioresScores
}
