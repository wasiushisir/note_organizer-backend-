const express = require("express");
const {
  createNoteFromDb,
  getNoteFromDb,
  updateNoteFromDb,
  deleteNoteFromDb,
} = require("../../../../src/app/modules/note/note.controller");
const { protect } = require("../../../middleware/authmiddleware");
const upload = require("../../../middleware/multermiddleware");

const router = express.Router();

router
  .get("/", protect, getNoteFromDb)
  .post("/", upload.single("fileData"), protect, createNoteFromDb)
  .put("/:id", upload.single("fileData"), protect, updateNoteFromDb)
  .delete("/:id", protect, deleteNoteFromDb);

module.exports = router;
