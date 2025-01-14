import express from 'express'
import { getWebhook } from '~/controllers/instagram.controller'

const router = express.Router()

router.get('/instagram', getWebhook)

export default router