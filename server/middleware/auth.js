import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncErorr.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/user.js";


export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return next(new ErrorHandler('Unauthorized', 401));
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return next(new ErrorHandler('Invalid authorization header', 401));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded._id);

  next();
});

