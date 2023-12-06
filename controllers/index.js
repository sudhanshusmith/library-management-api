const { StatusCodes } = require("http-status-codes");
const { validationResult } = require("express-validator");
const {
  BadRequestError,
  UnauthenticatedError,
  InternalServerError,
} = require("../errors");


const Book = require("../models/book");

const getAllBooks = async (req, res) => {
  let existingBooks;
  try {
    existingBooks = await Book.find();
  } catch (err) {
    throw new InternalServerError(
      "Can't fetch books, please try again later."
    );
  }

  if (!existingBooks) {
    throw new BadRequestError(
      "Can't find any books, please try adding a book first."
    );
  }

  res
    .status(StatusCodes.OK)
    .json({
      success: true,
      msg: "All Books Fetched Successfully!",
      data: existingBooks,
    });
}


const addBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Please provide all the input fields correctly");
  }

  const {
    title,
    authorName,
    publication,
    description,
    price,
    available,
    quantity,
  } = req.body;

  let existingBook;
  try {
    existingBook = await Book.find({title: title});
  } catch (err) {
    throw new InternalServerError(
      "Unable to Fetch data from Server, Please try agin later."
    );
  }

  if (existingBook) {
    throw new BadRequestError(
      "Dupliacte Entry!, There is already a book with same name."
    );
  }

  const detailsToBeSaved = new Book({
    title,
    authorName,
    publication,
    description,
    price,
    available,
    quantity,
  });

  try {
    const savedBookDetail = await detailsToBeSaved.save();
    res
      .status(StatusCodes.CREATED)
      .json({
        success: true,
        msg: "Book Added!",
        data: savedBookDetail,
      });
  } catch (err) {
    console.log(err);
    throw new InternalServerError(
      "Can't add the book right now, please try again later."
    );
  }
};


const updateBook = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new BadRequestError("Please provide all the input fields correctly");
  }

  const bookId = req.params.id;
  const {
    title,
    authorName,
    publication,
    description,
    price,
    available,
    quantity,
  } = req.body;

  let existingBook;
  try {
    existingBook = await Book.findById(bookId);
  } catch (err) {
    console.log(err);
    throw new InternalServerError(
      "Can't find any book with this ID, please try again later."
    );
  }

  if (!existingBook) {
    throw new BadRequestError(
      "Can't find any book with this ID, please try again later."
    );
  }

  existingBook.title = title;
  existingBook.authorName = authorName;
  existingBook.publication = publication;
  existingBook.description = description;
  existingBook.price = price;
  existingBook.available = available;
  existingBook.quantity = quantity;

  try {
    const updatedBook = await existingBook.save();
    res
      .status(StatusCodes.OK)
      .json({
        success: true,
        msg: "Book Updated!",
        data: updatedBook,
      });
  } catch (err) {
    console.log(err);
    throw new InternalServerError(
      "Can't update the book right now, please try again later."
    );
  }
}

module.exports = {
  getAllBooks,
  addBook,
  updateBook,
};
