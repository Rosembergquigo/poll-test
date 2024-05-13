import { Item } from "../models/item.models.js"

export const itemRegister = async (req, res) =>{
    const { optiontext, itemvalue,  questionId } = req.body
    
    try{
        const newItem = await Item.create({
            option_text: optiontext,
            item_value: itemvalue,
            questionId
        })
        res.json({
            id: newItem.id,
            questionText: newItem.option_text,
            itemValue: newItem.item_value,
            questionId: newItem.questionId
        })
    }catch(err){
        res.status(500).json({message: "No se logra crear Item de pregunta"})
    }
}

export const getItems = async (req, res) =>{
    const items = await Item.findAll()
    res.send(items)
}

export const getItem= async (req, res) =>{
    const {id} = req.params
    const item = await Item.findByPk(id)

    if(!item) return res.status(404).json({message: "Item de pregunta no encontrado"})

        res.send({
            id: item.id,
            questionText: item.option_text,
            itemValue: item.item_value,
            questionId: item.questionId
        })
}

export const updateItem = async (req, res) =>{
    const {id} = req.params
    const { optiontext, itemvalue,  questionId } = req.body

    try{
        const item = await Item.findByPk(id)
        item.option_text = optiontext,
        item.item_value = itemvalue,
        item.questionId = questionId

        await item.save()
        res.json(item)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const  deleteItem = async (req, res) =>{
    const {id} = req.params
    try{
        const itemDelete = await Item.destroy({
            where:{
                id
            }
        });
        res.status(204).json({message: "Item eliminado"})
    }catch(err){
        return res.status(500).json({message: "no se logra eliminar Item de pregunta"});
    }
}