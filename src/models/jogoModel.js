var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrar(score, tempo, erros, idUsuario) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO jogo (score, tempo, erros, fkUsuario) VALUES ('${score}', '${tempo}', '${erros}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarMaioresScores() {
    var instrucaoSql = `
        select usuario.nome, max(jogo.score) as score
        from usuario inner join jogo on jogo.fkUsuario = usuario.idUsuario
        group by usuario.nome ORDER BY max(jogo.score) DESC limit 5;
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    listarMaioresScores
};
