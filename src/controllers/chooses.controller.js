import { Chooses } from "../models/choose.model.js"

export const chooseRegister = async (req, res) =>{
    const { itemchoose, pollAnswerId, questionId } = req.body
    
    try{
        const newChoose = await Chooses.create({
            item_choose: itemchoose,
            pollAnswerId,
            questionId
        })
        res.json({
            id: newChoose.id,
            itemchoose: newChoose.item_choose,
            pollAnswerId: newChoose.pollAnswerId,
            questionId: newChoose.questionId
        })
    }catch(err){
        res.status(500).json({message: "No se logra crear respuesta"})
    }
}

export const getChooses = async (req, res) =>{
    const chooses = await Chooses.findAll()
    res.send(choses)
}

export const getChoose = async (req, res) =>{
    const {id} = req.params
    const choose = await Chooses.findByPk(id)

    if(!choose) return res.status(404).json({message: "Selección no encontrada"})

    res.send({
        id: choose.id,
        itemchoose: choose.item_choose,
        pollAnswerId: choose.pollAnswerId,
        questionId: choose.questionId
    })
}

export const updateChoose = async (req, res) =>{
    const {id} = req.params
    const { itemchoose } = req.body

    try{
        const choose = await Chooses.findByPk(id)
        choose.item_choose = itemchoose

        await choose.save()
        res.json(choose)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const  deleteChoose = async (req, res) =>{
    const {id} = req.params
    try{
        const chooseDelete = await Chooses.destroy({
            where:{
                id
            }
        });
        res.status(204).json({message: "Selección eliminado"})
    }catch(err){
        return res.status(500).json({message: "no se logra eliminar selección"});
    }
}