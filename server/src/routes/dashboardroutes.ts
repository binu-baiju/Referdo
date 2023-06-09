import express, { Router } from "express";
import { registerOrLogin } from "../controllers/authControllers";
import {addDevs, dashboard,deleteDev,getDevs,getSomeDevs,updateUserProfile} from "../controllers/dashboardController"
import { authenticateToken } from "../middlewares/middleware";

const router: Router = express.Router();


router.get("/dashboard",authenticateToken, dashboard);
router.put("/dashboard/editprofile",authenticateToken, updateUserProfile);
router.post("/dashboard/adddevs",authenticateToken, addDevs);
router.get("/dashboard/getsomedevs",authenticateToken, getSomeDevs);
router.delete("/dashboard/deletedev",authenticateToken, deleteDev);
router.get("/dashboard/getdevs",authenticateToken, getDevs);







export default router;
