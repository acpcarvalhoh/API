const { Router } = require("express");
const userRouter = Router();
const UserController = require("./../controllers/UserController")

const userController = new UserController();

userRouter.get("/:id", userController.create);
  

module.exports = userRouter;
