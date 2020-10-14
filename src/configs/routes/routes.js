const page = require('../../views/index');
const admin = require('../../views/admin');
const ParticipantesController = require('../../controller/ParticipantesController');

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send(page)
    });

    app.post('/votacao', ParticipantesController.inserirParticipantes());

    app.get('/admin', (req, res) => {
        res.send(admin)
    });
}

