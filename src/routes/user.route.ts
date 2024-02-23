import express from 'express'
import { getUsers } from '../controller/user.controller'

const router = express.Router()

router.get('/', getUsers)

export default router
