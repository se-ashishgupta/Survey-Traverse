import express from "express";
import { config } from "dotenv";
import cors from "cors";
import ErrorMiddleware from "./middleware/Error.js";

config();

const app = express();


// Using Middleware 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());



//Importing and Using Routes
import user from "./routes/userRoutes.js";
import survey from "./routes/surveyRoutes.js";


app.use("/api/v1", user);
app.use("/api/v1", survey);


export default app;

app.get("/", (req, res) => {
    res.send(
        `<h1>Welcome, Website is Working on ${process.env.FRONTEND_URL} click <a href=${process.env.FRONTEND_URL}>here</a></h1>`
    );
});

app.use(ErrorMiddleware);
