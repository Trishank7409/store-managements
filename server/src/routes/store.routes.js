import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { createStore } from "../controllers/store.controller.js";
const router = Router();
router.route("/createStore/:id").post(createStore )

// router.route("/getStore/:id").get(verifyJWT,getStore)

// router.route("/updateStore/:id").put(verifyJWT,updateStore)

// router.route("/deleteStore/:id").delete(verifyJWT,deleteStore)

export default router;