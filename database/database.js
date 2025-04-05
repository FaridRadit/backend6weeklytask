import { Sequelize } from "sequelize";
const db=new Sequelize("user","root","",{
host:"localhost",
dialect:"mysql",

});
export default db;