import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Chooses = sequelize.define('chooses',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_user:{
        type: DataTypes.INTEGER
    },
    id_poll:{
        type: DataTypes.INTEGER
    },
    id_question:{
        type: DataTypes.INTEGER
    },
    item_choose:{
        type: DataTypes.STRING(1)
    }
})