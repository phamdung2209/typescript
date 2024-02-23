import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './src/config/connectDB'
import authRoutes from './src/routes/auth.route'
import userRoutes from './src/routes/user.route'

const app = express()
const POST = 8080
dotenv.config()
app.use(express.json())
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send({
        message: 'Server is running!',
    })
})

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
// app.use('/api/users', courseRoutes)

connectDB()

app.listen(POST, () => {
    console.log(`Server is running at http://localhost:${POST}`)
})
