import express from "express";
import protectRoute from "../middleware/protectRoute.js";

import { getUsersForSidebar, updateProfilePic } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.post("/update-profile", protectRoute, updateProfilePic);

export default router;