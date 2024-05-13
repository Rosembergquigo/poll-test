import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Question } from './question.models.js';
import { PollsAnswer } from './pollAnswer.models.js';

export const Polls = sequelize.define('poll',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    poll_name:{
        type: DataTypes.STRING
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

Polls.hasMany(PollsAnswer, {
    foreignKey: 'pollId',
    sourceKey: 'id'
})

PollsAnswer.belongsTo(Polls, {
    foreignKey: 'pollId',
    targetKey: 'id'
})