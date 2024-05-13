import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Question } from './question.models.js';

export const Polls = sequelize.define('poll',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    poll_name:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
});

Polls.hasMany(Question, {
    foreignKey: 'pollId',
    sourceKey: 'id'
})

Question.belongsTo(Polls, {
    foreignKey: 'pollId',
    targetKey: 'id'
})