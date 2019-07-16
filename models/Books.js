const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
     title: { type: String, required: true },
     authors: { type: String, required: true },
     link: { type: String, required: true },
     img: { type: String, required: true },
     description: String
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;