import express, { Router } from "express";
import { addLink, getLinks } from "../controllers/linkController";
import { authenticateToken } from "../middlewares/middleware";

const router: Router = express.Router();

router.post(`/dashboard/link/createlink`,authenticateToken,addLink);
router.get(`/dashboard/link/getlink`,authenticateToken,getLinks);



export default router;
