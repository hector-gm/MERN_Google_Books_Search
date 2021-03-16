const router = require("express").Router();
const axios = require("axios");

require("dotenv").config();

router.get("/search/:type/:title", (req,res) => {
    return axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=in${req.params.type}:${req.params.title}&key=${process.env.REACT_APP_API_KEY_GOOGLE_BOOKS}
        `)
        .then((response) => res.json(response.data))
        .catch((err) => res.send(err));
});

module.exports = router;