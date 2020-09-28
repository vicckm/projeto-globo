class ParticipantesDao { 
    constructor(db) {
        this._db = db;
    }

    inserir(participante) {
        return new Promise( (resolve, reject) => {

            if(participante == 'participanteUm') {
                const INSERT = `
                INSERT INTO participantes (participanteUm)
                VALUES (1);
                `; 

                this._db.run(INSERT, err => {
                    if(err) {
                        reject('Não foi possível inserir na tabela');
                    }

                    resolve('Inserido!');
                }
            )} else {

                const INSERT = `
                INSERT INTO participantes (participanteDois)
                VALUES (1);
                `; 

                this._db.run(INSERT, err => {
                    if(err) {
                        reject('Não foi possível inserir na tabela');
                    }

                    resolve('Inserido!');
                }
            )};


        });
    };
};

module.exports = ParticipantesDao;