const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const booksController = require("../controllers/index");

router.get("/", (req, res) => {
  res.send({ success: true, msg: "Welcome to Book Store API" });
});

router.get("/api/books", booksController.getAllBooks);

router.post(
  "/api/books",
  [
    check("title").not().isEmpty(),
    check("authorName").not().isEmpty(),
    check("publication").not().isEmpty(),
    check("description").not().isEmpty(),
    check("price").not().isEmpty(),
    check("available").not().isEmpty(),
    check("quantity").not().isEmpty(),
  ],
  booksController.addBook
);

router.put(
  "/api/books/:id",
  [
    check("title").not().isEmpty(),
    check("authorName").not().isEmpty(),
    check("publication").not().isEmpty(),
    check("description").not().isEmpty(),
    check("price").not().isEmpty(),
    check("available").not().isEmpty(),
    check("quantity").not().isEmpty(),
  ],
  booksController.updateBook
);

module.exports = router;
