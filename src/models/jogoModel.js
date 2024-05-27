var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function registrar(score, time, errors, idUsuario) {
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO jogo (score, time, errors, idUsuario) VALUES ('${score}', '${time}', '${errors}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    var instrucaoSql = `
        SELECT jogo.id, jogo.score, jogo.time, jogo.errors, usuario.nome FROM jogo inner join usuario on jogo.idUsuario = usuario.idUsuario where jogo.idUsuario='${idUsuario}';
    `;
    return database.executar(instrucaoSql);
}

function listarMaioresScores(quantidade) {
    var instrucaoSql = `
        select usuario.nome, max(jogo.score) as score
        from usuario inner join jogo on jogo.idUsuario = usuario.idUsuario
        group by usuario.nome ORDER BY max(jogo.score) DESC limit ${quantidade};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    registrar,
    listarPorUsuario,
    listarMaioresScores
};
