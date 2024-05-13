import { Router } from "express";
import { itemRegister, getItem, getItems, updateItem, deleteItem } from "../controllers/item.controller.js";

const router = Router()

router.get('/item', getItems)
router.get('/item/:id', getItem)
router.post('/item', itemRegister)
router.put('/item/:id', updateItem)
router.delete('/item/:id', deleteItem)


export default router;