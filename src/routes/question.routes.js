import { Router } from "express";
import { questionRegister, getQuestion, getQuestions, updateQuestion, deleteQuestion, getQuestionItems } from "../controllers/question.controller.js";

const router = Router()

router.get('/question', getQuestions)
router.get('/question/:id', getQuestion)
router.post('/question', questionRegister)
router.put('/question/:id', updateQuestion)
router.delete('/question/:id', deleteQuestion)
router.get("/question/:id/items", getQuestionItems)


export default router;