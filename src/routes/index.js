const { Router } = require("express");
const userRouter = require("./User.routes");
const moviesRouter = require("./Movies_notes.routes");
const tagRouter  = require("./Tags.routes");
const sessionsRouter = require("./Sessions.routes")

const routes = Router();

routes.use("/users", userRouter);
routes.use("/notes", moviesRouter);
routes.use("/tags", tagRouter);
routes.use("/sessions", sessionsRouter);

module.exports = routes;



