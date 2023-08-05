const asyncHandler = require("express-async-handler");
const { createNote } = require("./note.service");

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
