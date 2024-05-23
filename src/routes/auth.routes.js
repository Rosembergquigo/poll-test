import { Router } from "express";
import { login, register, getUsers, getUser, deleteUser, updateUser, logout, profile, verifyToken } from "../controllers/auth.controller.js";
import { loginRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validateValidates.js";
import { loginValidate, registerValidate } from "../validates/auth.validate.js";


const router = Router()

//users routes
router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.get('/profile', loginRequired, profile)


router.post('/user', validateSchema(registerValidate), register)
router.post('/login', validateSchema(loginValidate), login)
router.post('/logout', logout)

router.delete('/user/:id', deleteUser)

router.put('/user/:id', updateUser)

router.get('/verify', verifyToken)

export default router