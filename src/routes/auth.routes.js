import { Router } from "express";
import { login, register, getUsers, getUser, deleteUser, updateUser, logout, profile } from "../controllers/auth.controller.js";
import { loginRequired } from "../middlewares/validateToken.js";

const router = Router()

//users routes
router.get('/user', getUsers)
router.get('/user/:id', getUser)
router.get('/profile', loginRequired, profile)


router.post('/user', register)
router.post('/login', login)
router.post('/logout', logout)

router.delete('/user/:id', deleteUser)

router.put('/user/:id', updateUser)

export default router