const page = require('../../views/index');
const ParticipantesController = require('../../controller/ParticipantesController');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send(page)
    });

    app.post('/votacao', ParticipantesController.inserirParticipantes());
}

