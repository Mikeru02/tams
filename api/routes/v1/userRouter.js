import { Router } from "express";
import UserController from "../../controllers/v1/userController.js";
import authorization from "../../middlewares/authorization.js";

const userRouter = new Router();
const user = new UserController();

userRouter.use(authorization);

// Get Methods

// Post Methods
userRouter.post("/", user.create.bind(user));
userRouter.post("/login", user.login.bind(user));

// Patch Methods

// Delete Methods

export default userRouter;