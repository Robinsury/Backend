import express  from "express";

import { Register, getmyProfile, login, logout } from "../controllers/user.js";
import { isauthenticate } from "../middleweares/auth.js";
const router = express.Router();

// router.get("/all",getallUsers)
router.post("/new",Register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/me",isauthenticate,getmyProfile)

export default router;



// cors  deployment of page