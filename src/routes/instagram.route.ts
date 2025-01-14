import express from 'express'
import { getWebhook, testInsta } from '../controllers/instagram.controller'

const router = express.Router()

router.get('/webhook', getWebhook)
router.get('/', testInsta)

export default router