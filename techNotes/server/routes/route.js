const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "views", "home.html"));
});

router.get("/contacts", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "contacts.html"));
});

module.exports = router;