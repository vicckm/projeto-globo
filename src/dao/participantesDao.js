class ParticipantesDao {
  constructor(db) {
    this._db = db;
  }

  inserir(participante) {
    return new Promise((resolve, reject) => {
      if (participante == "participante_1") {
        const INSERT = `
                INSERT INTO votacao (id_participante_1, votos_participante_1, id_participante_2, votos_participante_2)
                VALUES (1, 1, 0, 0);
                `;

        this._db.run(INSERT, (err) => {
          if (err) {
            reject("Não foi possível inserir na tabela");
          }

          resolve("O seu voto foi computado!");
        });
      } else {
        const INSERT = `
                INSERT INTO votacao (id_participante_1, votos_participante_1, id_participante_2, votos_participante_2)
                VALUES (0, 0, 2, 1);
                `;

        this._db.run(INSERT, (err) => {
          if (err) {
            reject("Não foi possível inserir na tabela");
          }

          resolve("O seu voto foi computado!");
        });
      }
    });
  }
}

module.exports = ParticipantesDao;
