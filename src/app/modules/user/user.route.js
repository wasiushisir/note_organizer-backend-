const express = require("express");
const {
  registerUserFromDb,
  loginUserFromDb,
  getMe,
} = require("./user.controller");

const { protect } = require("../../../../src/middleware/authmiddleware");

const router = express.Router();

router
  .post("/", registerUserFromDb)
  .post("/login", loginUserFromDb)
  .get("/me", protect, getMe);

module.exports = router;
