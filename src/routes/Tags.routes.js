const { Router } = require("express");
const TagsController = require("../controllers/TagsController");
const enseuraAuthenticated = require("../middlewares/ensureAuthenticated");

const tagsRouter = Router();
const tagsController = new TagsController();

tagsRouter.get("/", enseuraAuthenticated, tagsController.index);

module.exports = tagsRouter;