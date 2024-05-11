import { Router } from "express";
import { login, register, getUsers, getUser, deleteUser } from "../controllers/auth.controller.js";
import { pollRegister, polls, getPoll } from "../controllers/poll.controller.js";

const router = Router()

//users routes
router.get('/user', getUsers)
router.get('/user/:id', getUser)

router.post('/user', register)
router.post('/login', login)

router.delete('/user/:id', deleteUser)

router.put('/user')

//poll routes
router.post('/poll', pollRegister)

router.get('/poll', polls)
router.get('/poll/:id', getPoll)


export default router