import bcrypt from 'bcryptjs';
import { createAccessToken } from "../utils/jwt.js";
import { Users } from "../models/user.models.js";

//User Module
export const register = async (req, res) => {

    const {email, name, phone, password, profile} = req.body
    try{
        const passwordHash = await bcrypt.hash(password,10)
        const newUser = await Users.create({
            email,
            name,
            phone,
            password: passwordHash,
            profile
        })    
        
        const token = await createAccessToken({id: newUser.id});
        
        res.cookie("token", token)
        res.json({
            id: newUser.id,
            email: newUser.email,
            name: newUser.name,
            phone: newUser.phone,
            profile: newUser.profile,
            create_at: newUser.create_at
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
    
};

export const getUsers = async (req, res) => {
    const users = await  Users.findAll()
    res.send(users)
}

export const getUser = async (req, res) => {
    const {id} = req.params;
    const user = await Users.findByPk(id)
    
    if(!user) return res.status(404).json({message : "usuario no encontrado"})
    
    res.send({
        id: user.id,
        email: user.email,
        name: user.name,
        phone: user.phone,
        create_at: user.create_at
    })
}

export const deleteUser = async (req, res) => {
    const {id} = req.params;

    try{
        const userDelete = await Users.destroy({
            where:{
                id
            }
        });
        res.status(204).json({message: "Usuario Eliminado"});
    }catch(err){
        return res.status(500).json({message: "no se logra eliminar usuario"});
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {phone, password} = req.body

    try{
        const passwordHash = await bcrypt.hash(password,10)
        const user = await Users.findByPk(id)
        user.phone = phone
        user.password = passwordHash

        await user.save()

        res.json(user)

    }catch(err)
    {
        res.status(500).json({message: err.message})
    }
}

export const login = async (req, res) => {

    const {email, password} = req.body

    try{

        const userFond = await Users.findOne({ 
            where:{
                email
            } 
        });
        if(!userFond) return res.status(400).json({message: "No se logra tener acceso"})
        const isMatch = await bcrypt.compare(password, userFond.password)

        if(!isMatch) return res.status(400).json({message: "No se logra tener acceso"})
        
        const token = await createAccessToken({id: userFond.id});
        
        res.cookie("token", token)
        res.json({
            id: userFond.id,
            email: userFond.email,
            name: userFond.name,
            phone: userFond.phone,
            create_at: userFond.create_at
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
};

export const logout = (req, res) => {
    res.cookie('token', "", {
        expires: new Data(0)
    })
    return res.sendStatus(200)
}