const mongoose = require('mongoose')

const BookshopSchema = new mongoose.Schema({
    title: String,
    category: String,
    author: String,
    noOfPages: Number,
    dateAdded: {
        type: Date,
        defualt: Date.now
    }

})

module.exports = mongoose.model('BookShop', BookshopSchema)
