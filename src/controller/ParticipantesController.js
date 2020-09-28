const ParticipantesDao = require('../dao/participantesDao');
let db = require('../configs/database/database');


class ParticipantesController {
    static inserirParticipantes() {
        return (req, res) => {
            const participantesDao = new ParticipantesDao(db);

            participantesDao.inserir(req.body.participante)
            .then( resp => { res.send(resp) })
            .catch( err => { console.log(err)} )
        }
    }
}

module.exports = ParticipantesController;