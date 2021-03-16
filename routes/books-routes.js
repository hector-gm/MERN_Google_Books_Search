const router = require("express").Router();
const {saveNewBook, getSavedBooks, deleteBook} = require("../controllers/controller");

router
  .route("/:id")
  .get("/books",getSavedBooks)
  .put("/books", saveNewBook)
  .delete("/books/:id", deleteBook);

module.exports = router;