import exppress from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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
//Its possible also by importing body parser and use if like app.use(bodyParser.json())
app.use(exppress.json());

app.listen(3000, () => {
  console.log("The server is runnig at 3000 port");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
