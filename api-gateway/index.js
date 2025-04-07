
const express = require('express')
const axios = require('axios')
const app = express()
const PORT = process.env.PORT || 3000


// user service
app.get('/user', async (req, res) => {
    const response = await axios.get('http://localhost:3001/user')
    res.json(response?.data)
})

// product service
app.get('/product', async(req, res) => {
    const response = await axios.get('http://localhost:3002/product')
    res.json(response?.data)
})

app.listen(PORT, ()=>{
    console.log(`Gateway is running on http://localhost:${PORT}`)
})















