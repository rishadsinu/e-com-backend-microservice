
const mongoose = require('mongoose')

const connnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

module.exports =  connnectDB;

