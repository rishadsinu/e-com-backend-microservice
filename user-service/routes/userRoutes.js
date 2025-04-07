
const expres = require('express')
const { addUser, getUsers } = require('../controllers/userController.js')
const router = expres.Router()

router.post('/', addUser)
router.get('/', getUsers)

module.exports = router






