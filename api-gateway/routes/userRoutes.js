
const express = require('express');
const router = express.Router()
const axios = require('axios')

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

router.get('/' , async (req, res) => {
    const users = await axios.get(`${USER_SERVICE_URL}/users`);
    res.json(users.data)
})


module.exports = router
















