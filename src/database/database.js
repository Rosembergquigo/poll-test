import { Sequelize } from "sequelize";
import { SQLPASS, SQLUSER } from "../config.js";

export const sequelize = new Sequelize('polltest', SQLUSER, SQLPASS,{
    host: 'localhost',
    dialect: 'postgres'
})

