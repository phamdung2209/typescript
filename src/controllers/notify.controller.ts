import { Request, Response } from 'express'

export const getNotify = async (req: Request, res: Response) => {
    try {
        const { data, mac } = req as any
        console.log('Data: ', data)
        console.log('Mac: ', mac)
    } catch (error: any) {
        console.log('Error getNotify in controller: ', error.message)
        return res.json({ error: error.message })
    }
}
