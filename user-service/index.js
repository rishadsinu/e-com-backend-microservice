
const express = require('express');
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3001
const connectDB = require('./config/db.js')
const userRoutes = require('./routes/userRoutes.js')

dotenv.config();
connectDB()

const app = express()
app.use(express.json())
app.use('/users', userRoutes)

app.listen(PORT, () => {
    console.log(`User service running on http://localhost:${PORT}`)
})








