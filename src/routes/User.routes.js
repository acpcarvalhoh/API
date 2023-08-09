const { Router, request } = require("express");
const userRouter = Router();
const UserController = require("./../controllers/UserController")
const UserAvatarController = require("../controllers/UserAvatarController")

const multer = require("multer")
const uploadConfig = require("../configs/uploads")
const uploads = multer(uploadConfig.MULTER)

const ensureAuthenticated = require("../middlewares/ensureAuthenticated")
const userController = new UserController();
const userAvatarController = new UserAvatarController();

userRouter.post("/", userController.create);
userRouter.put("/", ensureAuthenticated, userController.update);
userRouter.patch("/avatar", ensureAuthenticated, uploads.single("avatar"), userAvatarController.update);

module.exports = userRouter;
