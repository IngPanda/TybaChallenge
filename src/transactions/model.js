const mongoose = require('mongoose')


const transactionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    transaction_type: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
       
    },
    user: {
        type: String,
        required: true,
    },

})

transactionSchema.list = async function(idUser) {
   return this.find({user: idUser});
}

const Transaction = mongoose.model('Transaction',transactionSchema)

module.exports = Transaction