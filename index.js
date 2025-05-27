import express from "express";
import cors from "cors";
import dotenv from "dotenv";


import db from "./database/database.js";
import User from "./model/model.js";
import Note from "./model/note.js";



import noteRoutes from "./Routes/noteRoutes.js";

dotenv.config();
const app = express();


app.use(cors()); 
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api", noteRoutes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server connected on port ${process.env.PORT || 8080}`)
);
