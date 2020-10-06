const exitError = require('./exitError');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.sqlite', err => 
{ if(err) return exitError(err) });


const TABLE_PARTICIPANTES = `
    CREATE TABLE IF NOT EXISTS participantes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        url_foto TEXT
    );
`

// colocar duas chaves estrangeiras id_participante 1 e 2 e adicionar data final da votação
const TABLE_VOTACAO = `
    CREATE TABLE IF NOT EXISTS votacao (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        id_participante_1 INTEGER,
        votos_participante_1 INTEGER,
        id_participante_2 INTEGER,
        votos_participante_2 INTEGER,
        FOREIGN KEY (id_participante_1) REFERENCES participantes(id)
        FOREIGN KEY (id_participante_2) REFERENCES participantes(id)
    );
`

const INSERT_PARTICIPANTES = `
        INSERT INTO participantes (nome, url_foto)
        VALUES ('Elsa', 'https://assets.vogue.com/photos/58920113186d7c1b6493ce40/master/pass/frozen-elsa-lesbian-girlfirend.jpg'),
               ('Penelope Charmosa', 'https://conteudo.imguol.com.br/c/entretenimento/34/2020/03/11/a-personagem-penelope-charmosa-1583932132170_v2_450x600.jpg')
`
const INSERT_VOTACAO = `
        INSERT INTO votacao (id_participante_1, votos_participante_1, id_participante_2, votos_participante_2)
        VALUES (1, 0, 2, 0)             
`

db.serialize( () => {
    db.run(TABLE_PARTICIPANTES, err => { if(err) return exitError(err) });

    db.run(TABLE_VOTACAO, err => { if(err) return exitError(err) });

    // db.run(INSERT_PARTICIPANTES, err => { if(err) return exitError(err) });

    // db.run(INSERT_VOTACAO, err => { if(err) return exitError(err) });
})
