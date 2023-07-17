const express = require('express')
const mongoose = require ('mongoose')
const expenseSchama = ('./Model/expense')
const bodyparser = require ('body-parser')

const expenseModel = mongoose.model('Expense', expenseSchema)
const app = express()
app.arguments(bodyParser.urlencoded({extended: false}))
const mongoDBAcess = "mongodb+srv:cantin"<password>@cluster0

