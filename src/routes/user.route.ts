import express from 'express'
import { getUsers } from '../controllers/user.controller'

const router = express.Router()

router.get('/', getUsers)

export default router
