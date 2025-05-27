import { Sequelize } from "sequelize";
const db=new Sequelize("user","root","",{
host:"35.232.122.185",
dialect:"mysql",

});
export default db;
