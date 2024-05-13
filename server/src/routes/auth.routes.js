import { Router } from "express";
import {
    registerUser,
    loginUser,
    loggedOutUser
} from "../controllers/auth.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = Router();
router.route("/registration").post(registerUser )
router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, loggedOutUser);
export default router;