import { Request, Response } from "express";

export const getWebhook = async (req: Request, res: Response) => {
    try {
        const hub = req.query

        res.json({
            message: 'Get from webhook instagram'
        })

        res.json(hub['hub.challenge'])
    } catch (error: any) {
        console.log('Error in getWebhook controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}

export const testInsta = async (req: Request, res: Response) => {
    try {
        console.log('res', res)

        res.json({message: 'Server is running!'})
    } catch (error: any) {
        console.log('Error in getWebhook controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}