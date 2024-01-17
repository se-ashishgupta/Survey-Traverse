import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/userController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

//To register a new user
router.route("/register").post(register);

//To Login user
router.route("/login").post(login);

//To Login user
router.route("/logout").post(isAuthenticated, logout);

//Get My profile
router.route("/getuser").get(isAuthenticated, getMyProfile);


export default router;