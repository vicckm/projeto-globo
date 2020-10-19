const paginaResultado = require("../views/admin");

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
            reject("Não foi possível inserir na tabela 1");
          }

          resolve(paginaResultado);
        });
      } else {
        const INSERT = `
                INSERT INTO votacao (id_participante_1, votos_participante_1, id_participante_2, votos_participante_2)
                VALUES (0, 0, 2, 1);
                `;

        this._db.run(INSERT, (err) => {
          if (err) {
            reject("Não foi possível inserir na tabela 2");
          }

          resolve(paginaResultado);
        });
      }
    });
  }

  computaVotos() {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT SUM(votos_participante_1) AS part1, SUM(votos_participante_2) AS part2 FROM votacao;
      `;

      this._db.all(query, [], (err, rows) => {
        if (err) {
          reject("Não foi possível computar os votos");
        }

        resolve(rows)
      });
    });
  }
}

module.exports = ParticipantesDao;
