import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Item } from './item.models.js'

export const Question = sequelize.define('questions',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    question_text: {
        type: DataTypes.STRING
    }
})

Question.hasMany(Item, {
    foreignKey: 'itemId',
    sourceKey: 'id'
})

Item.belongsTo(Question, {
    foreignKey: 'itemId',
    targetKey: 'id'
})