const express = require("express");
const {
  createNoteFromDb,
} = require("../../../../src/app/modules/note/note.controller");
const { protect } = require("../../../middleware/authmiddleware");

const router = express.Router();

router.post("/", protect, createNoteFromDb);

module.exports = router;
