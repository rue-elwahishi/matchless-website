const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //User schame
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        match: [],
        required: [true, 'Please add a valid email']
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'Please add a password'],
        minlength: 6,
        select: false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('User', UserSchema);
