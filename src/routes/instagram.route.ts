import express from 'express'
import { getWebhook, getinsta } from '../controllers/instagram.controller'

const router = express.Router()

router.get('/webhook', getWebhook)
router.post('/webhook', getinsta)

export default router