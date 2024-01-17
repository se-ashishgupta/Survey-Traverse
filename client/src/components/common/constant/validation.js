import * as yup from "yup";
export const createSurveySchema = yup.object().shape({

    // Basic Info 
    email: yup.string().required("Email is required").matches(/@[^.]*\./, "Invalid email address"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    gender: yup.string().required("Gender is required"),
    mobile: yup.string().matches(/^\+?\d{10,15}$/, "Invalid mobile number format").required("Mobile Number is required"),
    nationality: yup.string().required("Nationality is required"),


    // Address 
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    zipCode: yup.string().required("ZipCode is required"),
    address1: yup.string().required("Address is required"),
    address2: yup.string(),

    // Message 
    message: yup.string().required("Message is required"),



});
export const loginSchema = yup.object().shape({

    // Basic Login Info 
    email: yup.string().required("Email is required").matches(/@[^.]*\./, "Invalid email address"),
    password: yup.string().required("Password is required"),

})

