import { Request, Response } from "express";

export const getWebhook = async (req: Request, res: Response) => {
    try {
        const hub = req.query
        
        console.log('hub_____________>', hub)
        console.log('hub.challenge_____________>', hub['hub.challenge'])

        res.send(hub['hub.challenge'])
    } catch (error: any) {
        console.log('Error in getWebhook controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}

export const getinsta = async (req: Request, res: Response) => {
    try {
        console.log('res', res)

        res.json({message: 'getinsta is running!'})
    } catch (error: any) {
        console.log('Error in getinsta controller', error.message)
        res.json({ error: 'Internal server error' })
    }
}