const asyncHandler = require("express-async-handler");
const { createNote, getNote } = require("./note.service");

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
  }
});
