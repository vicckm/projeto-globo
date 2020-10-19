const page = require("../../views/index");
const admin = require("../../views/admin");
const ParticipantesController = require("../../controller/ParticipantesController");
let db = require("../../configs/database/database");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(page);
  });

  app.get("/votacao", ParticipantesController.computaVotos());

  app.post("/votacao", ParticipantesController.inserirParticipantes());

  app.get("/admin/:part1/:part2", (req, res) => {
    res.send(admin(req.params.part1, req.params.part2));
  });
};
