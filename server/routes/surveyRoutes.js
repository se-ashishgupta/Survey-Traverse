import express from "express";
import { createSurvey, getAllSurvey } from "../controllers/surveyController.js";
import { isAuthenticated } from "../middleware/auth.js";

const router = express.Router();

//To register a new user
router.route("/createsurvey").post(createSurvey);

//To Login user
router.route("/getallsurvey").get(isAuthenticated, getAllSurvey);


export default router;