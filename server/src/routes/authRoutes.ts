import express, { Router } from "express";
import { registerOrLogin, dashboard } from "../controllers/authControllers";

const router: Router = express.Router();

// Register/Login route
router.post("/registerOrLogin", registerOrLogin);

// Dashboard route
router.get("/dashboard", dashboard);

export default router;