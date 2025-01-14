import { Request, Response } from "express";

export const getWebhook = async (req: Request, res: Response) => {
    try {
        console.log('res', res)

        res.json({
            message: 'Get from webhook instagram'
        })
    } catch (error: any) {
        console.log('Error in getWebhook controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}