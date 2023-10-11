import express from "express";
import SignUpAuth from "../controllers/auth.controller.js";
const router = express.Router();
router.post("/sign-up", SignUpAuth);
export default router;
