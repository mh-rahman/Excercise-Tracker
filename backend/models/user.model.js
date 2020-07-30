// User Schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    usuername: {
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
}, {
    timeStamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;