import exppress from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected to mongodb successfully");
  })
  .catch((error) => {
    console.log(error.message);
  });
const app = exppress();
app.use(exppress.json());
app.use(cookieParser());
app.listen(3000, () => {
  console.log("The server is runnig at 3000 port");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//Global error handler middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode: statusCode,
    message,
  });
});
