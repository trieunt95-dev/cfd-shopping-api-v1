import { Router } from "express";
import userController from "@src/controllers/user.controller";

const userRouter = Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getUser);
userRouter.get("/:id", userController.getUser);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
