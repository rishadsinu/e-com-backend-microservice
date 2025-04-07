const express = require('express')
const app = express()
const PORT = process.env.PORT || 3002

app.get('/product',(req, res) => {
    res.json({name:'I Phone 14 pro',ram:'256 GB',Price:128000})
})

app.listen(PORT,()=>{
    console.log(`Product service running on port: http://localhost:${PORT}`)
})








