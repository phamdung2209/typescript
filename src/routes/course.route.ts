import express from 'express'
import { getCourses, newCourse } from '../controllers/course.controller'

const router = express.Router()

router.get('/', getCourses)
router.post('/new-course', newCourse)

export default router
