import { Sequelize } from "sequelize";
import db from "../database/database.js";
const User=db.define("user",{
    name:Sequelize.STRING,
    catatan:Sequelize.STRING,
});
db.sync().then(()=>console.log("Database Synced"));

export default User;