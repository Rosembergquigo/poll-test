import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Item } from './item.models.js'
import { Chooses } from './choose.model.js'

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
    foreignKey: 'questionId',
    sourceKey: 'id'
})

Item.belongsTo(Question, {
    foreignKey: 'questionId',
    targetKey: 'id'
})

Question.hasMany(Chooses, {
    foreignKey: 'questionId',
    sourceKey: 'id'
})

Chooses.belongsTo(Question, {
    foreignKey: 'questionId',
    sourceKey: 'id'
})