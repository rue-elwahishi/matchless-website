const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //User schame
});


module.exports = mongoose.model('User', UserSchema);
