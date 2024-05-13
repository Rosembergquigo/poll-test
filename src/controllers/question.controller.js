import { Question } from '../models/question.models.js'

export const questionRegister = async (req, res) =>{
    
}

export const getQuestions = async (req, res) =>{
    
}

export const getQuestion = async (req, res) =>{
    const {id} = req.params
}

export const updateQuestion = async (req, res) =>{
    const {id} = req.params
    const { questionText } = req.body

}

export const  deleteQuestion = async (req, res) =>{
    const {id} = req.params
}