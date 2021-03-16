const router = require("express").Router();
const {saveNewBook, getSavedBooks, deleteBook} = require("../controllers/controller");

router.route("/:id");
router.get("/books",getSavedBooks);
router.put("/books", saveNewBook);
router.delete("/books/:id", deleteBook);

module.exports = router;