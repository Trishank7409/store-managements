import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { createStore,
    getStoresById,
    deleteStoreById,
    getAllStore
    } from "../controllers/store.controller.js";
const storeRouter = Router();
storeRouter.route("/createStore/:id").post(verifyJWT ,createStore )

storeRouter.route("/getStores/:id").get(verifyJWT,getStoresById)

storeRouter.route("/getAllStore").get(verifyJWT,getAllStore)

storeRouter.route("/deleteStoreById/:id").delete(verifyJWT,deleteStoreById)

export default storeRouter;