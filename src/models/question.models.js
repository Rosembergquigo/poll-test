import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Question = sequelize.define('questions',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question_text: {
        type: DataTypes.STRING
    },
    id_poll:{
        type: DataTypes.INTEGER
    }
})