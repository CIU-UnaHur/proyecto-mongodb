const express = require('express')
require('dotenv').config()
const route = require('./routes/libro.routes')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })

app.use('/libros',route)

const PORT = process.env.PORT
app.listen(PORT)