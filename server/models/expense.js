const mongoose = require ('mongoose')
const expenseSchema = new mongoose.Schema({
    name: string,
    amount: Number,
    date: String,
    invoice: String
})
module.exports = expenseSchema