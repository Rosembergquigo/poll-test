import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'

export const Item = sequelize.define('items',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    option_text:{
        type: DataTypes.STRING,
    },
    item_value:{
        type: DataTypes.STRING(1)
    }
})