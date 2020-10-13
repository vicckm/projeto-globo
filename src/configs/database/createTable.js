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
        VALUES  ('Bob Esponja', 'https://bit.ly/3jKVint'),
                ('Capitão Gancho', 'https://bit.ly/34Fa6xs'),
                ('Dexter', 'https://bit.ly/34B1yYG'),
                ('Docinho', 'https://bit.ly/2SBIELN'),
                ('Elsa', 'https://bit.ly/3jK4g4l'),
                ('Fred Flinstone', 'https://bit.ly/2SDyUkc'),
                ('Johnny Bravo', 'https://bit.ly/30IxmtC'),
                ('Leitão', 'https://bit.ly/2GKoHjc'),
                ('Magali', 'https://bit.ly/3jTRMqM'),
                ('Margarida', 'https://bit.ly/34zpXha'),
                ('Marge Simpson', 'https://bit.ly/3lwtCU1'),
                ('Papai Smurf', 'https://bit.ly/2GFRA01'),
                ('Penelope Charmosa', 'https://bit.ly/3dajHAf'),
                ('Popeye', 'https://bit.ly/30MHxxc'),
                ('Ursula', 'https://bit.ly/3dbH6S2'),
                ('Velma', 'https://bit.ly/36JWWlF')
                `


const INSERT_VOTACAO = `
        INSERT INTO votacao (id_participante_1, votos_participante_1, id_participante_2, votos_participante_2)
        VALUES (1, 0, 2, 0)             
`

db.serialize( () => {
    db.run(TABLE_PARTICIPANTES, err => { if(err) return exitError(err) });

    db.run(TABLE_VOTACAO, err => { if(err) return exitError(err) });

    db.run(INSERT_PARTICIPANTES, err => { if(err) return exitError(err) });

    db.run(INSERT_VOTACAO, err => { if(err) return exitError(err) });
})
