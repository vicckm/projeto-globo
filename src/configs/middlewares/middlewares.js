const bodyParser = require('body-parser');
const { express } = require('../server/custom-express'); 

module.exports = (app) => {
    app.use('/static', express.static(__dirname + '../../../public'));
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }));
}