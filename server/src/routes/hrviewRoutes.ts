import express, { Router } from "express";
const router: Router = express.Router();

import { getHrDevs } from "../controllers/hrviewController";


router.get('/hrview/:userId',getHrDevs);

export default router;