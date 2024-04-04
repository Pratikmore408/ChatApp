import express from "express";
import protectRoutes from "../middleware/protectRoutes.middleware.js";
import { getUserForSidebar } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", protectRoutes, getUserForSidebar);

export default userRouter;
