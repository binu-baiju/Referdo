import express, { Router } from "express";
import { registerOrLogin } from "../controllers/authControllers";
import {dashboard,updateUserProfile} from "../controllers/dashboardController"
import { authenticateToken } from "../middlewares/middleware";

const router: Router = express.Router();


router.get("/dashboard",authenticateToken, dashboard);
router.put("/dashboard/editprofile",authenticateToken, updateUserProfile);


export default router;
