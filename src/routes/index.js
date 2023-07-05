const { Router } = require("express");
const userRoutes = require("./User.routes");
const moviesRoutes = require("./Movies_notes.routes");
const tagRoutes  = require("./Tags.routes");


const routes = Router();

routes.use("/users", userRoutes);
routes.use("/notes", moviesRoutes);
routes.use("/tags", tagRoutes);

module.exports = routes;



