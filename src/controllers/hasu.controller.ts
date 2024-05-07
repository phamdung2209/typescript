import axios from 'axios'
import { Request, Response } from 'express'

export const getProductsByCategory = async (req: Request, res: Response) => {
    try {
        const { formData } = req.body as any

        const data = await axios.postForm('https://hasumart.com.vn/ajax/product/items', formData)

        res.json(data.data?.success?.items)
    } catch (error: any) {
        console.log(error.message)
        res.json({
            error: error.message,
        })
    }
}
