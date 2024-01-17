import { catchAsyncError } from "../middleware/catchAsyncErorr.js";
import { Survey } from "../models/survey.js";
import ErrorHandler from "../utils/errorHandler.js";


export const createSurvey = catchAsyncError(async (req, res, next) => {
    const { email, firstName, lastName, gender, mobile, nationality, country, state, city, address1, zipCode, address2, message, } = req.body;

    if (!email || !firstName || !lastName || !gender || !mobile || !nationality || !country || !state || !city || !zipCode || !address1 || !message)
        return next(new ErrorHandler("Please Enter All Fields", 400));


    await Survey.create({
        email, firstName, lastName, gender, mobile, nationality, country, state, city, zipCode, address1, address2, message,
    });

    res.status(201).json({
        success: true,
        message: "Survey Send Successfully",
    });
});

export const getAllSurvey = catchAsyncError(async (req, res, next) => {
    const surveys = await Survey.find({});
    res.status(201).json({
        success: true,
        surveys
    });
});

