import { catchAsyncError } from "../middleware/catchAsyncErorr.js";
import { User } from "../models/user.js";
import ErrorHandler from "../utils/errorHandler.js";

export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
        return next(new ErrorHandler("Please Enter All Fields", 400));

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User Already Exist", 400));

    user = await User.create({
        name,
        email,
        password,
    });

    const token = user.getJWTToken();

    user.currentToken = token;
    user.save();

    res.status(201).json({
        success: true,
        token: token,
        user,
        message: "Registered Successfully",
    });
});


export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
    console.log(email);

    if (!email || !password)
        return next(new ErrorHandler("Please Enter All Fields", 400));

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Incorrect Email or Password", 400));

    const isMatch = await user.comparePassword(password);

    if (!isMatch)
        return next(new ErrorHandler("Incorrect Email or Password", 400));

    const token = user.getJWTToken();

    user.currentToken = token;
    user.save();

    res.status(200).json({
        success: true,
        token: token,
        user,
        message: `Welcome Back ${user.name}`,
    });
});


export const logout = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);
    user.currentToken = null;
    user.save();

    res.status(200).json({
        success: true,
        message: `Logout Successfully`,
    });
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {
    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        user,
    });
});