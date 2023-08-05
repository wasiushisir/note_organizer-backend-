const express = require("express");
const {
  createNoteFromDb,
  getNoteFromDb,
  updateNoteFromDb,
  deleteNoteFromDb,
} = require("../../../../src/app/modules/note/note.controller");
const { protect } = require("../../../middleware/authmiddleware");

const router = express.Router();

router
  .get("/", protect, getNoteFromDb)
  .post("/", protect, createNoteFromDb)
  .put("/:id", protect, updateNoteFromDb)
  .delete("/:id", protect, deleteNoteFromDb);

module.exports = router;
