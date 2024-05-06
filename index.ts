import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'

import connectDB from './src/config/connectDB'
import authRoutes from './src/routes/auth.route'
import userRoutes from './src/routes/user.route'
import courseRoutes from './src/routes/course.route'
import notifyRoutes from './src/routes/notify.route'
import path, { join } from 'path'

const app = express()
const POST = 8080
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(cookieParser())

const dirname = path.resolve()

app.get('/', (req, res) => {
    res.sendFile(join(dirname + '/src/', 'index.html'))
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/courses', courseRoutes)
app.use('/api/notify', notifyRoutes)

connectDB()

app.listen(POST, () => {
    console.log(`Server is running at http://localhost:${POST}`)
})
