const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    mainAccountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MainAccount',
        required: true
    },
    subAccountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubAccount'
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true })

module.exports = mongoose.model('Transaction', transactionSchema)
