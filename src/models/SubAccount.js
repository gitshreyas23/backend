const mongoose = require('mongoose')

const subAccountSchema = new mongoose.Schema({
    mainAccountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MainAccount',
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

module.exports = mongoose.model('SubAccount', subAccountSchema)
