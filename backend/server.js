import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";
import { app, server } from "./socket/socket.js";
import connectToMongoDB from "./db/mongoose.js";
import userRouter from "./routes/user.router.js";

dotenv.config();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
