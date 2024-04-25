import express from 'express'
import { getNotify } from '../controllers/notify.controller'

const router = express.Router()

router.get('/', getNotify)
// router.post('/')

export default router
