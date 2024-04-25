import express from 'express'
import { getNotify, getNotifyCallback } from '../controllers/notify.controller'

const router = express.Router()

router.post('/', getNotify)
router.post('/callback', getNotifyCallback)

export default router
