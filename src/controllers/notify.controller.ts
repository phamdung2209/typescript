import { Request, Response } from 'express'
import Notify from '../models/notify.model'

export const getNotify = async (req: Request, res: Response) => {
    try {
        const { data, mac } = req.body as any

        const notify = await Notify.create({
            method: data.method ?? 'No method',
            orderId: data.orderId ?? 'No orderId',
            appId: data.appId ?? 'No appId',
            mac: mac ?? 'No mac',
        })

        if (!notify) return res.json({ error: 'Create notify failed' })

        await notify.save()

        const notifies = await Notify.find()

        if (!notifies) return res.json({ error: 'Not found notifies' })

        return res.json(notifies)
    } catch (error: any) {
        console.log('Error getNotify in controller: ', error.message)
        return res.json({ error: error.message })
    }
}
