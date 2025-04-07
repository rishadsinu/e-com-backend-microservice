
const User = require('../models/userModel')

exports.addUser = async (req,res) => {
    const user = await User.create(req.body)
    res.json(user)
}

exports.getUser = async (req, res) => {
    const users = await User.find();
    res.json(users)
}







