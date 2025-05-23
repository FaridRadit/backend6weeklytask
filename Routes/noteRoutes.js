// routes/noteRoutes.js (Buat file baru ini)
import express from "express";
import { verifyToken } from "../controller/controller.js"; 
import { createNote, getMyNotes, getNoteById, updateNote, deleteNote } from "../controller/noteController.js";

const router = express.Router();


router.post("/notes", verifyToken, createNote);
router.get("/notes", verifyToken, getMyNotes); 
router.get("/notes/:id", verifyToken, getNoteById); 
router.patch("/notes/:id", verifyToken, updateNote); 
router.delete("/notes/:id", verifyToken, deleteNote); 

export default router;