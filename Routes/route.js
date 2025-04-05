import express from "express";
import { createUser,deleteNote,getNote, updateNote } from "../controller/controller.js";
const router=express.Router();
router.get("/getNote",getNote);
router.post("/createNote",createUser);
router.delete("/delete-Note/:id",deleteNote);
router.patch("/updateNote/:id",updateNote);

export default router;