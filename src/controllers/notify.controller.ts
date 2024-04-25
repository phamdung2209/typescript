import { Request, Response } from 'express'
import Notify from '../models/notify.model'

export const getNotify = async (req: Request, res: Response) => {
    try {
        const { data, mac } = req.body as any

        const notify = await Notify.create({
            method: data.method ?? 'No method',
            orderId: data.orderId ?? 'No orderId',
            appId: data.appId ?? 'No appId',
            // data: data ?? 'No data',
            mac: mac ?? 'No mac',
        })

        if (!notify)
            return res.json({
                error: 'Create notify failed',
                returnCode: 0,
                returnMessage: 'Payment failed',
            })

        await notify.save()

        const notifies = await Notify.find()

        if (!notifies) {
            return res.json({
                error: 'Not found notifies',
                returnCode: 0,
                returnMessage: 'Payment failed',
            })
        }

        return res.json({
            notifies,
            returnCode: 1,
            returnMessage: 'Payment success',
        })
    } catch (error: any) {
        console.log('Error getNotify in controller: ', error.message)
        return res.json({ error: error.message, returnCode: 0, returnMessage: 'Payment failed' })
    }
}

export const getNotifyCallback = async (req: Request, res: Response) => {
    try {
        const { data, mac, overallMac } = req.body as any
        console.log('data: ', data)
        console.log('mac: ', mac)
        console.log('overallMac: ', overallMac)
        return res.json({ data, returnCode: 1, returnMessage: 'Payment ss*' })
    } catch (error: any) {
        console.log('Error getNotifyCallback in controller: ', error.message)
        return res.json({ error: error.message, returnCode: 0, returnMessage: 'Payment failed*' })
    }
}
