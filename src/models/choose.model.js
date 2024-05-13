import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Chooses = sequelize.define('chooses',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    item_choose:{
        type: DataTypes.STRING(1)
    }
})
