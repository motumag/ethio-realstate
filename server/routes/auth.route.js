import express from "express";
import { SignUpAuth, signin } from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/sign-up", SignUpAuth);
router.post("/sign-in", signin);
export default router;
