import { Item } from '../models/item.models.js'
import { Question } from '../models/question.models.js'

export const questionRegister = async (req, res) =>{
    const { questionText, pollId } = req.body
    
    try{
        const newQuestion = await Question.create({
            question_text: questionText,
            pollId
        })
        res.json({
            id: newQuestion.id,
            questionText: newQuestion.question_text,
            pollId: newQuestion.pollId
        })
    }catch(err){
        res.status(500).json({message: "No se logra crear pregunta"})
    }
}

export const getQuestions = async (req, res) =>{
    const questions = await Question.findAll();
    res.send(questions)
}

export const getQuestion = async (req, res) =>{
    const {id} = req.params
    const question = await Question.findByPk(id)
    if(!question) return res.status(404).json({message: "Pregunta no encontrada"})

        res.send({
            id: question.id,
            questionText: question.question_text,
            pollId: question.pollId
        })
}

export const updateQuestion = async (req, res) =>{
    const {id} = req.params
    const { questionText } = req.body

    try{
        const question = await Question.findByPk(id)
        question.question_text = questionText

        await question.save()
        res.json(question)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const  deleteQuestion = async (req, res) =>{
    const {id} = req.params
    try{
        const questionDelete = await Question.destroy({
            where:{
                id
            }
        });
        res.status(204).json({message: "Pregunta eliminada"})
    }catch(err){
        return res.status(500).json({message: "no se logra eliminar Pregunta"});
    }
}

export const getQuestionItems = async (req,res) => {
    const {id} = req.params

    const items = await Item.findAll({
        where:{
            questionId : id
        }
    })
    res.json(items)
}