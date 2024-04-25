import mongoose from 'mongoose'

const notifySchema = new mongoose.Schema({
    // method: {
    //     type: String,
    // },
    // orderId: {
    //     type: String,
    // },
    // appId: {
    //     type: String,
    // },
    data: { type: String },
    mac: {
        type: String,
    },
})

const Notify = mongoose.model('Notify', notifySchema)
export default Notify
