import {DataTypes} from 'sequelize'
import { sequelize } from '../database/database.js'
import { Chooses } from './choose.model.js'

export const PollsAnswer = sequelize.define('pollAnswer', {
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
})

PollsAnswer.hasMany(Chooses, {
    foreignKey: 'pollAnswerId',
    sourceKey: 'id'
})

Chooses.belongsTo(PollsAnswer, {
    foreignKey: 'pollAnswerId',
    targetKey: 'id'
})