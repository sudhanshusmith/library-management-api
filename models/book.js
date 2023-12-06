const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const Book = new Schema({
  title: { type: String, required: true},
  authorName: { type: String, required: true},
  publication: { type: String, required: true},
  description: { type: String, required: true},
  price: { type: Number, required: true},
  available: { type: Boolean, required: true},
  quantity: { type: Number, required: true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


// sample json object
// {
//   "title": "The Alchemist",
//   "authorName": "Paulo Coelho",
//   "publication": "HarperCollins",
//   "description": "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.",
//   "price": 200,
//   "available": true,
//   "quantity": 5
// }

module.exports = mongoose.model("Book", Book);
