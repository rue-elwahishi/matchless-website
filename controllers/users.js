const User = require("../models/User");

//  @desc Get all Users
//  @route GET /api/v1/users
//  @access Public

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc Get single  User
//  @route GET /api/v1/users/:id
//  @access Public
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(400).success({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc Create single  user
//  @route POST /api/v1/users
//  @access Private
exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc Update single User
//  @route PUT /api/v1/users/:id
//  @access Private

exports.updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};

//  @desc delete single User
//  @route DELETE /api/v1/users/:id
//  @access Private
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(400).json({
                success: false
            });
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err.message
        });
    }
};