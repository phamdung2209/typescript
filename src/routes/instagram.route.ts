import express from 'express'
import { getWebhook } from '../controllers/instagram.controller'

const router = express.Router()

router.get('/webhook', getWebhook)

export default router