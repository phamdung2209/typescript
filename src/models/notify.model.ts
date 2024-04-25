import mongoose from 'mongoose'

const notifySchema = new mongoose.Schema({
    data: {
        type: String,
    },
    mac: {
        type: String,
    },
})

const Notify = mongoose.model('Notify', notifySchema)
export default Notify
