
const User = require('../models/userModel.js')

exports.addUser = async (req,res) => {
    const user = await User.create(req.body)
    res.json(user)
}

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}







