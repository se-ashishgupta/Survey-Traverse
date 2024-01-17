import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        validate: validator.isEmail,
    },
    firstName: {
        type: String,
        required: [true, "Please Enter Your Fisrt Name"],
    },
    lastName: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
    },
    gender: {
        type: String,
        required: [true, "Please Enter Gender"],
    },
    mobile: {
        type: String,
        required: [true, "Please Enter Your Mobile No"],
    },
    nationality: {
        type: String,
        required: [true, "Please Enter Your Nationality"],
    },
    country: {
        type: String,
        required: [true, "Please Enter Your Country"],
    },
    state: {
        type: String,
        required: [true, "Please Enter Your State"],
    },
    city: {
        type: String,
        required: [true, "Please Enter Your City"],
    },
    zipCode: {
        type: String,
        required: [true, "Please Enter Your ZipCode"],
    },
    address1: {
        type: String,
        required: [true, "Please Enter Your Address1"],
    },
    address2: {
        type: String,
    },
    message: {
        type: String,
        required: [true, "Please Enter Your Message"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});


export const Survey = mongoose.model("Survey", schema);
