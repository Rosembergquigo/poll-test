import { pool } from "../db.js";

export const register = (req,res) => {
    const {email, password, username} = req.body
    
    console.log(req.body)
    res.send('Registrando')
};

export const login = (req,res) => res.send("login");