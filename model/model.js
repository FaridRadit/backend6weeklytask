// model/User.js (Buat file baru ini)
import { Sequelize, DataTypes } from "sequelize";
import db from "../database/database.js";

const User = db.define("user", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default User;