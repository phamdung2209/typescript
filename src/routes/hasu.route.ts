import express from 'express'
import { getProductsByCategory } from '../controllers/hasu.controller'

const route = express.Router()

route.get('/product-by-category', getProductsByCategory)

export default route
