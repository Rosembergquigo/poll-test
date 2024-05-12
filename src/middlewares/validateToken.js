import jwt from 'jsonwebtoken'
import { SECRET } from '../config.js';

export const loginRequired = (req, res, next) =>{
    const {token} = req.cookies

    if(!token) 
        return res.status(401).json({message: "No hay un token de sesion"});

    jwt.verify(token, SECRET, (err, user) => {
        if(err) return res.status(403).json({message: "Token invalido"})
        
        req.user = user
        //console.log(token)
        next()
    })



    
}