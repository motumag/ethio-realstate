import exppress from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
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

app.listen(3000, () => {
  console.log("The server is runnig at 3000 port");
});
app.use("/api/user", userRouter);
