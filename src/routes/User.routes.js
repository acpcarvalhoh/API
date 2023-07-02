const { Router } = require("express");
const userRouter = Router();
const UserController = require("./../controllers/UserController")

const userController = new UserController();

userRouter.post("/", userController.create);
userRouter.put("/:id", userController.update);
  

module.exports = userRouter;
