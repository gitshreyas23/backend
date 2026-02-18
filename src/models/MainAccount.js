const mongoose = require('mongoose')

const mainAccountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

module.exports = mongoose.model('MainAccount', mainAccountSchema)
