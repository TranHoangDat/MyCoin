import express from "express";
import { createPassword, accessWallet } from "../controllers/auth.js";

const router = express.Router();

router.post("/createPassword", createPassword);
router.post("/accessWallet", accessWallet);

export default router;
