const express = require("express");
const {
  createNoteFromDb,
  getNoteFromDb,
} = require("../../../../src/app/modules/note/note.controller");
const { protect } = require("../../../middleware/authmiddleware");

const router = express.Router();

router.get("/", protect, getNoteFromDb).post("/", protect, createNoteFromDb);

module.exports = router;
