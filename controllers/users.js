const Users = require('../models/User')
//  this is a Get All Users controller
exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await Users.find()
        console.log(users)
        res.status(200).json({
            success: true,
            data: users
        })

    } catch {
        res.status(400).json({
            success: false
        })
    }
}
//  this is a Get spsfic User controller
exports.gerUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)
        res.status(200).json({
            success: true,
            data: user
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err
        })
    }

}
//  this is a Get create User controller
exports.createUser = async (req, res, next) => {
    try {
        const users = await Users.create(req.body)
        res.status(201).json({
            success: true,
            data: users
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }

}

//  this is a Get update User controller
exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = await Users.findOneAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        res.status(201).json({
            success: true,
            data: updatedUser
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}
//  this is a Get delete User controller
exports.deleteUser = async (req, res, next) => {
    try {
        const deleteUser = await Users.findByIdAndRemove(req.params.id)
        res.status(201).json({
            success: true,
            data: deleteUser
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        })
    }
}