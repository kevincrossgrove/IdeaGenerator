const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {type: String, required: true },
    passwordHash: {type: String, required: true },
    creationTime: {type: Date, required: false}
});

module.exports = mongoose.model('User', userSchema);