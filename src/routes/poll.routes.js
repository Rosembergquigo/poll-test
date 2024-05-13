import { Router } from "express";
import { loginRequired } from "../middlewares/validateToken.js";
import { getPolls, getPoll, pollRegister, updatePoll, deletePoll, getPollQuestions } from "../controllers/poll.controller.js";

const router = Router()

router.get('/polls', loginRequired, getPolls)
router.get('/polls/:id', loginRequired, getPoll)
router.post('/polls', loginRequired, pollRegister)
router.put('/polls/:id', loginRequired, updatePoll)
router.delete('/polls/:id', loginRequired, deletePoll)
router.get('/polls/:id/questions', loginRequired, getPollQuestions)

export default router;