import { Request, Response } from 'express'
import User from '../models/user.model'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().select('-password')

        if (users) {
            return res.json(users)
        }

        res.json({ error: 'No users found' })
    } catch (error: any) {
        console.log('Error in getUsers controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}
