const express = require("express");
const { registerUserFromDb, loginUserFromDb } = require("./user.controller");

const router = express.Router();

router.post("/", registerUserFromDb).post("/login", loginUserFromDb);

module.exports = router;
