import { Sequelize } from "sequelize";
const db=new Sequelize("user","root","",{
host:"Localhost",
dialect:"mysql",

});
export default db;
