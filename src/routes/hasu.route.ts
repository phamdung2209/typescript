import express from 'express'
import { getProductsByCategory } from '../controllers/hasu.controller'

const route = express.Router()

route.post('/product-by-category', getProductsByCategory)

export default route
