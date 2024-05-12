import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Users = sequelize.define('users',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING,
        unique: true
    },
    name:{
        type: DataTypes.STRING,
        unique: true
    },
    phone:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    profile:
    {
        type: DataTypes.INTEGER
    }

})