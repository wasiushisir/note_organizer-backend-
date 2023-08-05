const asyncHandler = require("express-async-handler");
const {
  createNote,
  getNote,
  upadateNote,
  deleteNote,
} = require("./note.service");

exports.createNoteFromDb = asyncHandler(async (req, res) => {
  // const { ...data } = req.body;
  // console.log(data);
  const note = await createNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "note created successfully",
      data: note,
    });
  } else {
    res.status(400);
    throw new Error("Failed to create note");
  }
});

exports.getNoteFromDb = asyncHandler(async (req, res) => {
  const note = await getNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "Retrived note successfully",
      data: note,
    });
  } else {
    res.status(400);
    throw new Error("Failed to retrive note");
  }
});

exports.updateNoteFromDb = asyncHandler(async (req, res) => {
  const note = await upadateNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "Updated note successfully",
      data: note,
    });
  } else {
    res.status(400);
    throw new Error("Failed to update note");
  }
});

exports.deleteNoteFromDb = asyncHandler(async (req, res) => {
  const note = await deleteNote(req);

  if (note) {
    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: note._id,
    });
  } else {
    res.status(400);
    throw new Error("Failed to delete note");
  }
});
