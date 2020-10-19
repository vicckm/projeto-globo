const ParticipantesDao = require("../dao/participantesDao");
let db = require("../configs/database/database");



class ParticipantesController {
  static inserirParticipantes() {
    return (req, res) => {
      const participantesDao = new ParticipantesDao(db);

      participantesDao
        .inserir(req.body.participante)
        .then((rows) => {
          res.redirect('/votacao');
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }

  static computaVotos() {
    return (req, res) => {
      const participantesDao = new ParticipantesDao(db);

      participantesDao
        .computaVotos()
        .then((rows) => {
          res.redirect(`/admin/${rows[0].part1}/${rows[0].part2}`);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
}

module.exports = ParticipantesController;
