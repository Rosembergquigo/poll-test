import { Router } from "express";
import { login, register, getUsers, getUser, deleteUser, updateUser, logout } from "../controllers/auth.controller.js";
import { pollRegister, getPolls, getPoll } from "../controllers/poll.controller.js";

const router = Router()

//users routes
router.get('/user', getUsers)
router.get('/user/:id', getUser)

router.post('/user', register)
router.post('/login', login)
router.post('/logout', logout)

router.delete('/user/:id', deleteUser)

router.put('/user/:id', updateUser)

//poll routes
router.post('/poll', pollRegister)

router.get('/poll', getPolls)
router.get('/poll/:id', getPoll)



export default router