var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrar", function (req, res) {
    jogoController.registrar(req, res);
})

router.get("/ranking", function (req, res) {
    jogoController.listarMaioresScores(req, res);
});

module.exports = router;