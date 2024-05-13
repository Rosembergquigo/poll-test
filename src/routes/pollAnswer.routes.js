import { Router } from "express";
import { loginRequired } from "../middlewares/validateToken.js";
import { getPollAnswer, getPollAnswers, pollAnswerRegister, updatePollAnswer, deletePollAnswer, getPollQuestions } from "../controllers/pollAnswer.controller.js";

const router = Router()

router.get('/pollAnswer', loginRequired, getPollAnswers)
router.get('/pollAnswer/:id', loginRequired, getPollAnswer)
router.post('/pollAnswer', loginRequired, pollAnswerRegister)
router.put('/pollAnswer/:id', loginRequired, updatePollAnswer)
router.delete('/pollAnswer/:id', loginRequired, deletePollAnswer)
router.get("/pollAnswer/:id/questions", loginRequired, getPollQuestions)
//router.get("/pollAnswer/:id/questions/:id/chooses", loginRequired, getPollQuestions)

export default router;