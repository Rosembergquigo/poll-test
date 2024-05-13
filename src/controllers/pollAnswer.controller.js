import { PollsAnswer } from "../models/pollAnswer.models.js"

export const pollAnswerRegister = async (req, res) =>{
    const { date, pollId } = req.body
    
    try{
        const newAnswer = await PollsAnswer.create({
            date,
            userId: req.user.id,
            pollId
        })
        res.json({
            id: newAnswer.id,
            date: newAnswer.date,
            userId: newAnswer.userId,
            pollId: newAnswer.pollId
        })
    }catch(err){
        res.status(500).json({message: "No se logra crear Respuesta de encuesta"})
    }
}

export const getPollAnswers = async (req, res) =>{
    const answers = await PollsAnswer.findAll({
        userId: req.user.id
    })
    res.send(answers)
}

export const getPollAnswer = async (req, res) =>{
    const {id} = req.params
    const answer = await PollsAnswer.findByPk(id)

    if(!answer) return res.status(404).json({message: "Encuesta respondida no encontrada"})

    res.send({
        id: answer.id,
        date: answer.date,
        userId: answer.userId,
        pollId: answer.pollId
    })
}

export const updatePollAnswer = async (req, res) =>{
    const {id} = req.params
    const { date } = req.body

    try{
        const pollAnswer = await PollsAnswer.findByPk(id)
        pollAnswer.date = date

        await pollAnswer.save()
        res.json(pollAnswer)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const  deletePollAnswer = async (req, res) =>{
    const {id} = req.params
    try{
        const pollAnswerDelete = await PollsAnswer.destroy({
            where:{
                id
            }
        });
        res.status(204).json({message: "Encuesta eliminada"})
    }catch(err){
        return res.status(500).json({message: "no se logra eliminar encuesta"});
    }
}

export const getPollQuestions = async(req,res) =>{
    
}
