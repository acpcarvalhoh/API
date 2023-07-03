const { Router } = require("express");
const moviesRouter = Router();
const MovieNotesController = require("../controllers/MoviesController");


const movieNotesController = new MovieNotesController();

moviesRouter.post("/:user_id", movieNotesController.create);


module.exports = moviesRouter;