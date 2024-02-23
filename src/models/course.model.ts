import mongoose from 'mongoose'

const courseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            unique: true,
        },
        description: {
            type: String,
            default: '',
        },
    },
    { timestamps: true },
)

const Course = mongoose.model('Course', courseSchema)
export default Course
