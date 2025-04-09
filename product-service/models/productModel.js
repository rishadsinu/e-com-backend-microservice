
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title : String,
    price : Number,
    stock : Number,
})

module.exports = mongoose.model('Product',productSchema)





