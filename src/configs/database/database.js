const exitError = require('./exitError');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.sqlite', err => 
{ if(err) return exitError(err) });

process.on("SIGINT", () => {
    db.close( () => {
        console.log('\n Database closed');
        process.exit(0); 
    });
});

module.exports = db;