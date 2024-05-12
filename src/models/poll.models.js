import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Polls = sequelize.define('poll',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    poll_name:{
        type: DataTypes.STRING
    }
})