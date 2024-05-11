import { pool } from "../db.js";
import bcrypt from 'bcryptjs';
import { createAccessToken } from "../utils/jwt.js";

//User Module
export const register = async (req,res) => {

    const data = req.body
    try{
        const passwordHash = await bcrypt.hash(data.password,10)
        data.password = passwordHash
        const {rows} = await pool.query('INSERT INTO users (email, name, phone, password) VALUES ($1, $2, $3, $4) RETURNING *', [data.email, data.name, data.phone, data.password])
        
        const token = await createAccessToken({id: rows[0].id});
        
        res.cookie("token", token)
        res.json({
            id: rows[0].id,
            email: rows[0].email,
            name: rows[0].name,
            phone: rows[0].phone,
            create_at: rows[0].create_at
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
    
};

export const getUsers = async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM users')
    res.send(rows)
}

export const getUser = async (req,res) => {
    const {id} = req.params;
    const {rows} = await pool.query('SELECT *FROM users WHERE id = $1 ', [id]);
    
    if(rows.length === 0){
        return res.status(404).json({message : "usuario no encontrado"})
    }
    res.send({
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].name,
        phone: rows[0].phone,
        create_at: rows[0].create_at
    })
}

export const deleteUser = async (req,res) => {
    const {id} = req.params;
    const {rowCount} = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    
    if(rowCount === 0){
        return res.status(404).json({message : "usuario no encontrado"})
    }
    
    return res.json({message: "Usuario Eliminado"});
}

export const login = async (req,res) => {

    const data = req.body
    const passwordHash = await bcrypt.hash(data.password,10)
    data.password = passwordHash
    const {rows} = await pool.query('INSERT INTO users (email, name, phone, password) VALUES ($1, $2, $3, $4) RETURNING *', [data.email, data.name, data.phone, data.password])
    
    const token = await createAccessToken({id: rows[0].id});
    
    res.cookie("token", token)
    res.json({
        id: rows[0].id,
        email: rows[0].email,
        name: rows[0].name,
        phone: rows[0].phone,
        create_at: rows[0].create_at
    })
};