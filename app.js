require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const postRouter = require('./routes/postRoute')
const bookRouter = require('./routes/bookShopRoute')

const PORT = process.env.PORT || 3000

const app = express()

const dbConnect = async () =>{
    try {
        conn = mongoose.connect(process.env.MONGODB_URI)
        console.log("connection Success")
    } catch (error) {
        console.log(error)
    }
}

dbConnect()
app.use('/', postRouter)

app.use('/', bookRouter)

app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`)
})