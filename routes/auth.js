import express from "express";
import { createPassword } from "../controllers/auth.js";

const router = express.Router();

router.post("/createPassword", createPassword);

export default router;
