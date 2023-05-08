const axios = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/:id", (req, res, next) => {
    axios.delete("http://localhost:3000/create/" + req.params.id);
    res.redirect("/");
});

module.exports = router;
