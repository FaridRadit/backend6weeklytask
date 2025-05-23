// model/Note.js (Buat file baru ini)
import { Sequelize, DataTypes } from "sequelize";
import db from "../database/database.js";
import User from "./model.js";

const Note = db.define("note", {
    title: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    }
   
});


User.hasMany(Note, {
    foreignKey: 'userId', 
    onDelete: 'CASCADE'
});


Note.belongsTo(User, {
    foreignKey: 'userId'
});


db.sync({ alter: true })
    .then(() => console.log("Database Synced with associations"))
    .catch(err => console.error("Error syncing database:", err));

export default Note;