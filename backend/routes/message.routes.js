import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import protectRoutes from "../middleware/protectRoutes.middleware.js";

const messageRouter = express.Router();

messageRouter.get("/:id", protectRoutes, getMessage);
messageRouter.post("/send/:id", protectRoutes, sendMessage);

export default messageRouter;
