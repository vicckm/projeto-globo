const exitError = require('./exitError');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.sqlite', err => 
{ if(err) return exitError(err) });


const TABLE_PARTICIPANTES = `
    CREATE TABLE IF NOT EXISTS participantes (
        participanteUm INTEGER DEFAULT '0',
        participanteDois INTEGER DEFAULT '0'
    )
`

db.serialize( () => {
    db.run(TABLE_PARTICIPANTES, err => { if(err) return exitError(err) });

    // db.run(INSERT_PARTICIPANTES, err => { if(err) return exitError(err) })
})
