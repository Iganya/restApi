const BookShop = require('../models/BookShop')

const getBooks = async (req, res) => {
    try {
        const books = await BookShop.find({})
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
    }
}
const createBooks = async (req, res) => {
    try {
        const books = await BookShop.create(req.body)
        res.status(201).json({
            message: "Created new Books",
            "data": books
        })
    } catch (error) {
        console.log(error)
    }
}
const findBook = async (req, res) => {
    try {
        const books = await BookShop.findById(req.params.id)
        res.status(200).json({
            message: "the book is",
            data: books
        })
    } catch (error) {
        console.log(error)
    }
}
const updateBook = async (req, res) =>{
    const bookBody = req.body
    const id = req.params.id
    try {
        const books = await BookShop.findByIdAndUpdate(id, bookBody)
        res.status(200).json({
            message: "document updated",
            "data": books
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteBook = async (req, res) => {
    const id = req.params.id
    try {
        const books = await BookShop.findByIdAndDelete(id)
        res.status(200).json({message: "successfully deleted"})
    } catch (error) {
        console.log(error)
    }
}

module.exports = {getBooks, createBooks, findBook, updateBook, deleteBook}