import express from "express";
import {
  SignUpAuth,
  signin,
  googleAuth,
} from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/sign-up", SignUpAuth);
router.post("/sign-in", signin);
router.post("/google", googleAuth);
export default router;
