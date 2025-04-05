import express from "express";
import cors from "cors";
import UserRoute from "./Routes/route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(8080, () => console.log("Server connected"));
