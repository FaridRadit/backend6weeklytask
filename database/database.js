import { Sequelize } from "sequelize";
const db=new Sequelize("user","root","",{
host:"34.72.240.54",
dialect:"mysql",

});
export default db;
