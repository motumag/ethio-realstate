import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
const SignUpAuth = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const addNewUser = new User({ username, email, password: hashPassword });
  try {
    await addNewUser.save();
    res.status(201).json({
      message: "user registered successfully",
    });
  } catch (error) {
    next(error);
  }
};
export default SignUpAuth;
