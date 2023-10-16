import express from "express";
import { updateUserInfo, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/userVerification.js";
const router = express.Router();
router.post("/update/:id", verifyToken, updateUserInfo);
router.delete("/delete/:id", verifyToken, deleteUser);
export default router;
