import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";

import connectToMongoDB from "./db/mongoose.js";
import userRouter from "./routes/user.router.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectToMongoDB();
});
