const { default: axios } = require("axios");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("create", { title: "Express" });
});

router.post("/", function (req, res, next) {
    let iscreate = false;
    axios.post("http://localhost:3000/create", req.body).then(() => {
        iscreate = true;
    });
    if (iscreate) {
        res.redirect("/fail");
    } else {
        res.redirect("/success");
    }
});

module.exports = router;
