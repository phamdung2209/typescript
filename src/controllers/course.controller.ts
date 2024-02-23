import Course from '../models/course.model'
import { Response, Request } from 'express'

export const getCourses = async (req: Request, res: Response) => {
    try {
        const course = await Course.find()

        if (course) {
            return res.json(course)
        }

        return res.json({ error: 'Not found courses' })
    } catch (error: any) {
        console.log('Error getCourses in controller: ', error.message)
        return res.json({ error: 'Internal server error' })
    }
}

export const newCourse = async (req: Request, res: Response) => {
    try {
        const { name, description } = req.body

        if (!name) res.json({ error: 'Field name is required' })

        const course = await Course.findOne({ name })
        if (course) res.json({ error: 'Course is exited' })

        const newCourse = new Course({
            name,
            description,
        })

        if (newCourse) {
            await newCourse.save()
            return res.json({ message: 'Course created successfully' })
        }

        return res.json({ error: 'Invalid course data' })
    } catch (error: any) {
        console.log('Error createCourse in controller: ', error.message)
        res.json({ error: 'Internal server error' })
    }
}
