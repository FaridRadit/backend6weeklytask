// controller/noteController.js (Buat file baru ini)
import Note from "../model/note.js";
import User from "../model/model.js"; 

async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const userId = req.user.id; 

        if (!title) {
            return res.status(400).json({ message: "Note title is required" });
        }

        const newNote = await Note.create({
            title,
            content,
            userId 
        });

        res.status(201).json({ message: "Note Created Successfully", note: newNote });
    } catch (error) {
        console.error('Error creating note:', error.message);
        res.status(500).json({ message: "Server error during note creation" });
    }
}

async function getMyNotes(req, res) {
    try {
        const userId = req.user.id; 
        const notes = await Note.findAll({
            where: { userId },
            include: [{ model: User, attributes: ['name', 'email'] }] // Opsional: sertakan info user
        });
        res.json(notes);
    } catch (error) {
        console.error('Error getting user notes:', error.message);
        res.status(500).json({ message: "Server error getting notes" });
    }
}

async function getNoteById(req, res) {
    try {
        const userId = req.user.id;
        const noteId = req.params.id;

        const note = await Note.findOne({
            where: { id: noteId, userId }, 
            include: [{ model: User, attributes: ['name', 'email'] }]
        });

        if (!note) {
            return res.status(404).json({ message: "Note not found or you don't have permission" });
        }
        res.json(note);
    } catch (error) {
        console.error('Error getting note by ID:', error.message);
        res.status(500).json({ message: "Server error getting note" });
    }
}

async function updateNote(req, res) {
    try {
        const userId = req.user.id;
        const noteId = req.params.id;
        const { title, content } = req.body;

        const [updatedRows] = await Note.update({ title, content }, {
            where: { id: noteId, userId } // Pastikan hanya note miliknya yang bisa diupdate
        });

        if (updatedRows === 0) {
            return res.status(404).json({ message: "Note not found or you don't have permission" });
        }
        res.status(200).json({ message: "Note Updated" });
    } catch (error) {
        console.error('Error updating note:', error.message);
        res.status(500).json({ message: "Server error updating note" });
    }
}

async function deleteNote(req, res) {
    try {
        const userId = req.user.id;
        const noteId = req.params.id;
        const deletedRows = await Note.destroy({
            where: { id: noteId, userId }
        });

        if (deletedRows === 0) {
            return res.status(404).json({ message: "Note not found or you don't have permission" });
        }
        res.status(200).json({ message: "Note Deleted" });
    } catch (error) {
        console.error('Error deleting note:', error.message);
        res.status(500).json({ message: "Server error deleting note" });
    }
}

export { createNote, getMyNotes, getNoteById, updateNote, deleteNote };