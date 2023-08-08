const { Router } = require("express");
const moviesRouter = Router();
const MovieNotesController = require("../controllers/MoviesController");
const enseuraAuthenticated = require("../middlewares/ensureAuthenticated");

const movieNotesController = new MovieNotesController();

moviesRouter.use(enseuraAuthenticated);

moviesRouter.get("/", movieNotesController.index);
moviesRouter.post("/", movieNotesController.create);
moviesRouter.get("/:id", movieNotesController.show);
moviesRouter.delete("/:id", movieNotesController.delete);



module.exports = moviesRouter;