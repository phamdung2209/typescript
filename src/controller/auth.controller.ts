import { Request, Response } from 'express'

import User from '../model/user.model'

export const signUp = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body

        const user = await User.findOne({ username })

        if (user) {
            return res.json({ error: 'Username already exists' })
        }

        const newUser = new User({
            username,
            password,
        })

        if (newUser) {
            await newUser.save()
            return res.json({ message: 'User created successfully' })
        }

        return res.json({ error: 'Invalid user data' })
    } catch (error: any) {
        console.log('Error in signUp controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}
