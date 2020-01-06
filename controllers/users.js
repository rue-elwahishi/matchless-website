const User = require('../models/User');

//@desc Get all users
// @route GET /api/v1/users
// @access Public
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });


    } catch (err) {
        res.status(400).json({ success: false });
    }

};
//@desc Get a single user
// @route GET /api/v1/users/:id
// @access Public
exports.getUser = async (req, res, next) => {
    try {
        const aUser = await User.findById(req.params.id);
        if (!aUser) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: aUser });
    } catch (err) {
        res.status(400).json({ success: false })
    }

};
//@desc Create a new user
// @route POST /api/v1/users
// @access Private
exports.createUser = async (req, res, next) => {
    try {
        const aUser = await User.create(req.body);
        res.status(201).json({
            success: true,
            data: aUser
        });
    }
    catch (err) {
        res.status(400).json({ success: false })
    }
};
//@desc Update user
// @route PUT /api/v1/users/:id
// @access Private
exports.updateUser = async (req, res, next) => {
    try {
        const toUpdateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!toUpdateUser) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: toUpdateUser });
    } catch (err) {
        res.status(400).json({ success: false })
    }

};
//@desc Delete bootcamp
// @route DELETE /api/v1/users/:id
// @access Private
exports.deleteUser = async (req, res, next) => {
    try {
        const toBeDeletedUser = await User.findByIdAndDelete(req.params.id);
        if (!toBeDeletedUser) {
            return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: {} });
    } catch (err) {
        res.status(400).json({ success: false })
    }
};


