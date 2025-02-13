const { Router } = require("express");

const NotesController = require("../controllers/notesController");

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.get("/:id", notesController.show);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.delete("/:id", notesController.delete);

module.exports = notesRoutes;