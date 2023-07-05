const { Router } = require("express");
const moviesRouter = Router();
const MovieNotesController = require("../controllers/MoviesController");


const movieNotesController = new MovieNotesController();


moviesRouter.get("/", movieNotesController.index);
moviesRouter.get("/:id", movieNotesController.show);
moviesRouter.post("/:user_id", movieNotesController.create);
moviesRouter.delete("/:id", movieNotesController.delete);



module.exports = moviesRouter;