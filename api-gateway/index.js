
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
require('dotenv').config()

// routes
const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js')

app.use(express.json())

// user service
app.use('/users', userRoutes);

// product service
app.use('/products', productRoutes)

app.listen(PORT, ()=>{
    console.log(`Gateway is running on: http://localhost:${PORT}`)
})















