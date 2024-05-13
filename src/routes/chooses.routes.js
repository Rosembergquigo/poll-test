import { Router } from "express";
import { loginRequired } from "../middlewares/validateToken.js";
import { getChoose, getChooses, chooseRegister, updateChoose, deleteChoose } from "../controllers/chooses.controller.js";

const router = Router()

router.get('/choose', loginRequired, getChooses)
router.get('/choose/:id', loginRequired, getChoose)
router.post('/choose', loginRequired, chooseRegister)
router.put('/choose/:id', loginRequired, updateChoose)
router.delete('/choose/:id', loginRequired, deleteChoose)

export default router;