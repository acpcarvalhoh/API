const { Router } = require("express");
const userRoutes = require("./User.routes");
const moviesRoutes = require("./Movies_notes.routes")


const routes = Router();

routes.use("/users", userRoutes);
routes.use("/movies", moviesRoutes);

module.exports = routes;



