import { Item } from '../models/item.models.js';
import { Polls } from '../models/poll.models.js'
import { Question } from '../models/question.models.js';
//poll Module
export const pollRegister = async(req, res) => {
    const { pollName } = req.body
    try{
        const newPoll = await Polls.create({
            poll_name: pollName
        })
        res.json({
            id: newPoll.id,
            pollName: newPoll.poll_name
        })
    }catch(err){
        res.status(500).json({message: "No se logra crear la encuesta"})
    }
};

export const getPolls = async(req,res) => {   
        const polls = await Polls.findAll();
        res.send(polls)
}

export const getPoll = async(req,res) => {
    const {id} = req.params
    const poll = await Polls.findByPk(id)

    if(!poll) return res.status(404).json({message: "Encuesta no encontrada"})

    res.send({
        id: poll.id,
        pollName: poll.poll_name
    })
}

export const updatePoll = async(req,res) => {
    const {id} = req.params
    const {pollName} = req.body

    try{
        const poll = await Polls.findByPk(id)
        poll.poll_name = pollName

        await poll.save()
        res.json(poll)
    }catch(err){
        res.status(500).json({message: err.message})
    }

}

export const deletePoll = async(req,res) => {
    const {id} = req.params

    try{
        const pollDelete = await Polls.destroy({
            where:{
                id
            }
            
        });
        res.status(204).json({message: "Usuario eliminado"})
    }catch(err){
        return res.status(500).json({message: "no se logra eliminar usuario"});
    }
}

export const getPollQuestions = async(req,res) => {
    const {id} = req.params

    const questions = await Question.findAll({
        where: {
            pollId: id
        },
        include: Item
    })
    
    
    res.json(questions)
}