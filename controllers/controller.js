const Book = require("../models/book");

module.exports = {
    saveNewBook: (req,res) => {
        Book.create({
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            image: req.body.image,
            link: req.body.link
        })
            .then(() => res.send("Book saved to list!"))
            .catch((err) => res.send(err));
    },

    getSavedBooks: (req,res) => {
        Book.find({})
            .then((books) => res.json(books))
            .catch((err) => res.send(err));
    },

    deleteBook: (req,res) => {
        Book.findById(req.params.id)
            .then((foundBook) => {
                foundBook.remove();
                res.send("Book removed from list");
            })
            .catch((err) => res.send(err));
    }
};